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

interface EditLandDialogProps {
  open: boolean;
  onClose: () => void;
  land: Land | null;
}

const EditLandDialog: React.FC<EditLandDialogProps> = ({
  open,
  onClose,
  land: land,
}) => {
  const [name, setName] = useState<string>();
  const [newArea, setNewArea] = useState<Area>();
  const [areas, setAreas] = useState<Area[]>([]);

  useEffect(() => {
    async function getAreas() {
      try {
        const response = await axios.get("http://localhost:3001/area"); //TODO: where id ...
        setAreas(response.data);
      } catch (error) {
        //TODO snackbar
      }
    }
    setNewArea(land?.area);
    getAreas();

    if (open && land) {
      setName(land.name);
      setNewArea(land.area);
    }
  }, [open, land]);

  const handleSave = async () => {
    const res = await axios.patch(`http://localhost:3001/land/${land?.id}`, {
      name,
      newAreaId: newArea!.id !== land?.area.id ? newArea?.id : null,
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
          value={newArea?.id || ""}
          onChange={(e) => {
            const selected = areas.find(
              (d) => d.id === Number(e.target.value)
            );
            setNewArea(selected);
          }}
          variant="outlined"
        >
          <MenuItem disabled value="">
            Válassz dialektust
          </MenuItem>
          {areas.map((area) => (
            <MenuItem key={area.id} value={area.id}>
              {area.name}
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

export default EditLandDialog;
