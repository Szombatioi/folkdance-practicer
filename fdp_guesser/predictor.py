from sklearn.preprocessing import MultiLabelBinarizer
import numpy as np
import csv
from transformers import AutoTokenizer
import torch

from model import MultiLabelClassifier

print("Starting predictor.py")

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


data, label_fields = read_csv()

mlbs = {
    label: MultiLabelBinarizer()
    for label in label_fields
}

all_label_vectors = {}
for label in label_fields:
    values = [[entry[label]] for entry in data]
    all_label_vectors[label] = mlbs[label].fit_transform(values)

all_labels = np.hstack([all_label_vectors[label] for label in label_fields])

model = MultiLabelClassifier(num_labels=all_labels.shape[1])


model.load_state_dict(torch.load("saved_model/multilabel_model.pt"))
model.eval()

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-multilingual-cased")
# tokenizer = AutoTokenizer.from_pretrained("NYTK/BERT-small-hungarian")
tokenizer = AutoTokenizer.from_pretrained("saved_model/")


def predict(title, top_k=6, threshold=0.32):
    inputs = tokenizer(title, return_tensors="pt", truncation=True, padding="max_length", max_length=32)
    with torch.no_grad():
        output = model(**inputs)
        logits = output["logits"]

    output_dict = {}
    i = 0
    for label in label_fields:
        size = len(mlbs[label].classes_)
        probs = logits[0, i:i+size].sigmoid()

        if label == "land":
            topk = min(top_k, size)
            top_idx = torch.topk(probs, topk).indices.tolist()
            
            for idx in top_idx:
                print(f"{mlbs[label].classes_[idx]}: {probs[idx]}")
            
            #TODO: ha valamelyik prob kiemelkedő, akkor azt vegyük figyelembe a többi helyett
            
            # threshold = probs.max() * 0.8
            
            top_values = [mlbs[label].classes_[idx] for idx in top_idx if probs[idx] > threshold]  # lehet itt is finomítani
            output_dict[label] = top_values if top_values else ["null"]
        else:
            top_prob, top_idx = torch.max(probs, dim=0)
            print(top_prob, top_idx)
            if top_prob > threshold:
                output_dict[label] = mlbs[label].classes_[top_idx]
            else:
                output_dict[label] = "nincs adat"
        
        
            # top_idx = torch.argmax(probs).item()
            # output_dict[label] = mlbs[label].classes_[top_idx]

        # output_dict[label] = top_values if top_values else ["nincs adat"]
        i += size
    del output_dict["title"]
    return output_dict
print("Predictor.py loaded")


# print(predict("legényes"))