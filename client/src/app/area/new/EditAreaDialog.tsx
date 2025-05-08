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
import { Area } from "@shared/area";

interface EditAreaDialogProps {
  open: boolean;
  onClose: () => void;
  area: Area | null;
}

const EditAreaDialog: React.FC<EditAreaDialogProps> = ({
  open,
  onClose,
  area: area,
}) => {
  const [name, setName] = useState<string>();
  const [newRegion, setNewRegion] = useState<Region>();
  const [regions, setRegions] = useState<Region[]>([]);

  useEffect(() => {
    async function getRegions() {
      try {
        const response = await axios.get("http://localhost:3001/region"); //TODO: where user id ...
        setRegions(response.data);
      } catch (error) {
        //TODO snackbar
      }
    }
    setNewRegion(area?.region);
    getRegions();
  }, [open, area]);

  useEffect(() => {
    if (open && area) {
      setName(area.name);
      setNewRegion(area.region);
    }
  }, [open, area]);

  const handleSave = async () => {
    const res = await axios.patch(
      `http://localhost:3001/area/${area?.id}`,
      {
        name,
        newRegionId:
          newRegion!.id !== area?.region.id ? newRegion?.id : null,
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
      <DialogTitle>Tájegység szerkesztése</DialogTitle>
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
          value={newRegion?.id || ""}
          onChange={(e) => {
            const selected = regions.find(
              (d) => d.id === Number(e.target.value)
            );
            setNewRegion(selected);
          }}
          variant="outlined"
        >
          <MenuItem disabled value="">
            Válassz régiót
          </MenuItem>
          {regions.map((dialect) => (
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

export default EditAreaDialog;
