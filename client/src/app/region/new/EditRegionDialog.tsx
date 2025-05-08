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

interface EditRegionDialogProps {
  open: boolean;
  onClose: () => void;
  region: Region | null;
}

const EditRegionDialog: React.FC<EditRegionDialogProps> = ({
  open,
  onClose,
  region: region,
}) => {
  const [name, setName] = useState<string>();
  const [newDialect, setNewDialect] = useState<Dialect>();
  const [dialects, setDialects] = useState<Dialect[]>([]);

  useEffect(() => {
    async function getDialects() {
      try {
        const response = await axios.get("http://localhost:3001/dialect"); //TODO: where id ...
        setDialects(response.data);
      } catch (error) {
        //TODO snackbar
      }
    }
    setNewDialect(region?.dialect);
    getDialects();
  }, [open, region]);

  useEffect(() => {
    if (open && region) {
      setName(region.name);
      setNewDialect(region.dialect);
    }
  }, [open, region]);

  const handleSave = async () => {
    const res = await axios.patch(
      `http://localhost:3001/region/${region?.id}`,
      {
        name,
        newDialectId:
          newDialect!.id !== region?.dialect.id ? newDialect?.id : null,
      }
    );
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
      <DialogTitle>Régió szerkesztése</DialogTitle>
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
          value={newDialect?.id || ""}
          onChange={(e) => {
            const selected = dialects.find(
              (d) => d.id === Number(e.target.value)
            );
            setNewDialect(selected);
          }}
          variant="outlined"
        >
          <MenuItem disabled value="">
            Válassz dialektust
          </MenuItem>
          {dialects.map((dialect) => (
            <MenuItem key={dialect.id} value={dialect.id}>
              {dialect.name}
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

export default EditRegionDialog;
