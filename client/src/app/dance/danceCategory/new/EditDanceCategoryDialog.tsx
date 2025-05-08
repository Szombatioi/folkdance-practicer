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
import { FigureType } from "@shared/figure-type";
import { DanceCategory } from "@shared/dance-category";

interface EditDanceCategoryDialogProps {
  open: boolean;
  onClose: () => void;
  danceCategory: DanceCategory | null;
}

const EditDanceCategoryDialog: React.FC<EditDanceCategoryDialogProps> = ({
  open,
  onClose,
  danceCategory: danceCategory,
}) => {
  const [name, setName] = useState<string>();

  useEffect(() => {
    if (open && danceCategory) {
      setName(danceCategory.name);
    }
  }, [open, danceCategory]);

  const handleSave = async () => {
    const res = await axios.patch(`http://localhost:3001/dance-categories/${danceCategory?.id}`, {
      name,
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
      <DialogTitle>Tánc kategória szerkesztése</DialogTitle>
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
