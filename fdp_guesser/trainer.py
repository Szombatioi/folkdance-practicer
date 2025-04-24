import torch
from torch import nn
from transformers import AutoTokenizer, AutoModel
from sklearn.preprocessing import MultiLabelBinarizer
from sklearn.utils import shuffle
from datasets import Dataset
import numpy as np
import sys
import csv
import os

from model import MultiLabelClassifier

def read_csv():
    data = []
    with open('dataset.csv', mode='r') as file:
        reader = csv.DictReader(file, delimiter=';')
        headers = reader.fieldnames
        # last_column = headers[-1] if headers else None

        for row in reader:
            # Convert the last column to a list, splitting by '|'
            # if last_column and row[last_column]:
            #     row[last_column] = row[last_column].split('|')
            # else:
            #     row[last_column] = []
            data.append(dict(row))
    return data, headers

# --- 1. Adat: kis minta táncokról ---
data, label_fields = read_csv()
data = shuffle(data, random_state=42)

# label_fields = ["dance_category", "dance_type", "dialect", "region", "area", "land"] #, "dancer"

# --- 2. Tokenizálás ---
tokenizer = AutoTokenizer.from_pretrained("distilbert-base-multilingual-cased")
# tokenizer = AutoTokenizer.from_pretrained("NYTK/BERT-small-hungarian")

if sys.argv.__contains__("-t"):
    tokenizer = AutoTokenizer.from_pretrained("saved_model/")

# --- 3. Binarizálók minden címkéhez ---
mlbs = {
    label: MultiLabelBinarizer()
    for label in label_fields
}

# --- 4. Binarizált címkék létrehozása ---
all_label_vectors = {}
for label in label_fields:
    values = [[entry[label]] for entry in data]
    all_label_vectors[label] = mlbs[label].fit_transform(values)

# --- 5. Címkék összeillesztése egy tömbbé ---
all_labels = np.hstack([all_label_vectors[label] for label in label_fields])

# --- 6. Tokenizálás és dataset készítés ---
def preprocess(entry, label_vector):
    enc = tokenizer(entry["title"], truncation=True, padding="max_length", max_length=32, return_tensors="pt")
    enc = {k: v.squeeze() for k, v in enc.items()}
    enc["labels"] = torch.tensor(label_vector, dtype=torch.float)
    return enc

dataset = Dataset.from_list([
    preprocess(entry, label_vector)
    for entry, label_vector in zip(data, all_labels)
])
dataset.set_format(type="torch")

model = MultiLabelClassifier(num_labels=all_labels.shape[1])

train_model = True
if sys.argv.__contains__("-m"):
    model.load_state_dict(torch.load("saved_model/multilabel_model.pt"))
    model.eval()
    train_model = False

# --- 8. Loss + Trainer ---
if train_model:
    from transformers import TrainingArguments, Trainer

    training_args = TrainingArguments(
        output_dir="./results",
        num_train_epochs=30,
        per_device_train_batch_size=4,
        logging_dir="./logs",
        logging_steps=1,
        save_strategy="no",
        report_to="none"
    )

    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=dataset,
        tokenizer=tokenizer
    )

    trainer.train()
    if not os.path.exists(os.path.join(os.getcwd(), "saved_model")):
        os.mkdir("saved_model")
        print("Folder created: saved_model/")
    torch.save(model.state_dict(), "saved_model/multilabel_model.pt")
    print("Model saved to saved_model/multilabel_model.pt")
    tokenizer.save_pretrained("saved_model/")


# --- 9. Predikciós függvény ---
# def predict(title):
#     inputs = tokenizer(title, return_tensors="pt", truncation=True, padding="max_length", max_length=32)
#     with torch.no_grad():
#         output = model(**inputs)
#         logits = output["logits"]
#         preds = (logits.sigmoid() > 0.5).int().numpy()[0]

#     # Visszafejtés: daraboljuk az outputot az eredeti címkék szerint
#     output = {}
#     i = 0
#     for label in label_fields:
#         size = len(mlbs[label].classes_)
#         probs = logits[i:i+size].sigmoid()
        
#         #Top-K
#         top_k = min(3, size)
#         top_idx = torch.topk(probs, top_k).indices.numpy()
#         top_values = [mlbs[label].classes_[idx] for idx in top_idx]
        
#         output[label] = top_values if top_values else ["nincs adat"]
        
        
#         # values = mlbs[label].inverse_transform(np.array([preds[i:i+size]]))[0]
#         # output[label] = values[0] if values else "nincs adat"
#         i += size
#     return output

# def predict(title, threshold=0.4):
#     # Tokenizáljuk a címet
#     inputs = tokenizer(title, return_tensors="pt", truncation=True, padding="max_length", max_length=32)
    
#     # Modell előrejelzés
#     with torch.no_grad():
#         output = model(**inputs)
#         logits = output["logits"]

#     # Visszafejtés
#     output = {}
#     i = 0
#     for label in label_fields:
#         size = len(mlbs[label].classes_)
#         probs = logits[0, i:i+size].sigmoid()
#         print(f"Label: {label}\tProbs: {probs}")

#         # Minden osztály, ami meghaladja a küszöböt
#         confident_idxs = (probs > threshold).nonzero(as_tuple=True)[0].tolist()
#         if confident_idxs:
#             output[label] = [mlbs[label].classes_[idx] for idx in confident_idxs]
#         else:
#             output[label] = ["nincs adat"]

#         i += size
    
#     return output

# def predict(title, top_k=5):
#     inputs = tokenizer(title, return_tensors="pt", truncation=True, padding="max_length", max_length=32)
#     with torch.no_grad():
#         output = model(**inputs)
#         logits = output["logits"]

#     output_dict = {}
#     i = 0
#     for label in label_fields:
#         size = len(mlbs[label].classes_)
#         probs = logits[0, i:i+size].sigmoid()

#         if label == "land":
#             topk = min(top_k, size)
#             top_idx = torch.topk(probs, topk).indices.tolist()
#             top_values = [mlbs[label].classes_[idx] for idx in top_idx if probs[idx] > 0.25]  # lehet itt is finomítani
#             output_dict[label] = top_values if top_values else ["nincs adat"]
#         else:
#             top_idx = torch.argmax(probs).item()
#             output_dict[label] = mlbs[label].classes_[top_idx]

#         # output_dict[label] = top_values if top_values else ["nincs adat"]
#         i += size

#     return output_dict


# print(predict("Legényes"))
