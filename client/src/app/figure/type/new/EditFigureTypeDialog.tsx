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

interface EditFigureTypeDialogProps {
  open: boolean;
  onClose: () => void;
  figureType: FigureType | null;
}

const EdigFigureTypeDialog: React.FC<EditFigureTypeDialogProps> = ({
  open,
  onClose,
  figureType: figureType,
}) => {
  const [name, setName] = useState<string>();

  useEffect(() => {
    if (open && figureType) {
      setName(figureType.name);
    }
  }, [open, figureType]);

  const handleSave = async () => {
    const res = await axios.patch(`http://localhost:3001/figure-types/${figureType?.id}`, {
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
      <DialogTitle>Figura típus szerkesztése</DialogTitle>
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

export default EdigFigureTypeDialog;
