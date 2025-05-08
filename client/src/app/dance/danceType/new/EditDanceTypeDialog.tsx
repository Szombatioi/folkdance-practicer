"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import axios from "axios";
import { Dialect } from "@shared/dialect";
import { Region } from "@shared/region";
import { Land } from "@shared/land";
import { Area } from "@shared/area";
import { DanceCategory } from "@shared/dance-category";
import { DanceType } from "@shared/dance-type";

interface EditDanceCategoryDialogProps {
  open: boolean;
  onClose: () => void;
  danceType: DanceType | null;
}

const EditDanceCategoryDialog: React.FC<EditDanceCategoryDialogProps> = ({
  open,
  onClose,
  danceType: danceType,
}) => {
  const [name, setName] = useState<string>();
  const [newDanceCategory, setNewDanceCategory] = useState<DanceCategory>();
  const [danceCategories, setDanceCategories] = useState<DanceCategory[]>([]);

  useEffect(() => {
    async function getDanceCategories() {
      try {
        const response = await axios.get("http://localhost:3001/dance-categories"); //TODO: where id ...
        setDanceCategories(response.data);
      } catch (error) {
        //TODO snackbar
      }
    }
    setNewDanceCategory(danceType?.danceCategory);
    getDanceCategories();

    if (open && danceType) {
      setName(danceType.name);
      setNewDanceCategory(danceType.danceCategory);
    }
  }, [open, danceType]);

  const handleSave = async () => {
    const res = await axios.patch(`http://localhost:3001/dance-types/${danceType?.id}`, {
      name,
      newDanceCategoryId: newDanceCategory!.id !== danceType?.danceCategory.id ? newDanceCategory?.id : null,
    });
    if (res.status >= 200 && res.status < 300) {
      //TODO snackbar
      onClose();
    } else {
      //TODO snackbar
      console.log("Error");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Tánctípus szerkesztése</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Név"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          fullWidth
          value={newDanceCategory?.id || ""}
          onChange={(e) => {
            const selected = danceCategories.find(
              (d) => d.id === Number(e.target.value)
            );
            setNewDanceCategory(selected);
          }}
          variant="outlined"
        >
          <MenuItem disabled value="">
            Válassz tánc kategóriát
          </MenuItem>
          {danceCategories.map((dc) => (
            <MenuItem key={dc.id} value={dc.id}>
              {dc.name}
            </MenuItem>
          ))}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Mégse
        </Button>
        <Button onClick={handleSave} color="primary">
          Módosítás
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDanceCategoryDialog;
