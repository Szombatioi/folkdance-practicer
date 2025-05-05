"use client"

import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import { DanceNote } from "@shared/dance-note";
import { FigureType } from "@shared/figure-type";
import axios from "axios";
import { useEffect, useState } from "react";

export default function NewFigureDialog({ open, setOpen, danceNote }: { open: boolean, setOpen: (value: boolean) => void/*Dispatch<SetStateAction<boolean>>*/, danceNote: DanceNote }) {
    // const [open, setOpen] = useState<boolean>(false)
    const [figureName, setFigureName] = useState<string>("");
    const [figureDescription, setFigureDescription] = useState<string>("");
    const [availableFigureTypes, setAvailableFigureTypes] = useState<FigureType[]>();
    const [selectedFigureType, setSelectedFigureType] = useState<FigureType>();
    const handleClose = () => {
        setOpen(false);
        setFigureName("");
        setFigureDescription("");
        setSelectedFigureType(undefined);
    }

    useEffect(() => {

        async function fetchFigureTypes() {
            const ftRes = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/figure-types`
            );
            setAvailableFigureTypes(ftRes.data);
        }
        fetchFigureTypes();
    }, []);

    const handleSubmit = async () => {
        if (!selectedFigureType) {
            //TODO snackbar
            return;
        }

        //TODO
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/figures`, {
            name: figureName,
            description: figureDescription,
            danceNoteId: danceNote.id,
            figureTypeId: selectedFigureType!.id,
        });

        handleClose();
    }

    return (
        <div style={{
            alignItems: "center",
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 8,
            paddingRight: 8,
            flexDirection: "column",
            display: "flex",
            gap: 2,
            flexGrow: 0,
            minWidth: "1200px",
        }}>
            <Dialog fullWidth maxWidth="xl" sx={{ padding: "4rem" }} open={open} onClose={handleClose} >
                <DialogTitle variant="h4" align="center">
                    Új figura felvétele ehhez: {danceNote.name}
                </DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flexGrow: 0, textAlign: "center" }}>
                    <TextField
                        onChange={(e) => setFigureName(e.target.value)}
                        value={figureName}
                        variant="outlined"
                        placeholder="Figura neve"
                        sx={{ width: "300px", marginX: 1, marginY: ".5rem" }}
                        required
                    />
                    <TextField sx={{ marginX: 1, marginY: ".5rem", width: "300px", }} value={danceNote.name} variant="outlined" label="Jegyzet címe" disabled />
                    <Autocomplete
                        disablePortal
                        options={availableFigureTypes || []}
                        getOptionLabel={(option) => option.name}
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        value={
                            availableFigureTypes?.find(
                                (t) => t.id === selectedFigureType?.id
                            ) || null
                        }
                        onChange={(e, v) => setSelectedFigureType(v!)}
                        sx={{ width: "300px", flexGrow: 0, marginX: 1, marginY: ".5rem" }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label="Figura típusa"
                                required
                            />
                        )}
                        renderOption={(props, option) => (
                            <li {...props} key={option.id}>
                                {option.name}
                            </li>
                        )}
                    />

                    <TextField
                        multiline
                        variant="outlined"
                        label="Leírás"
                        onChange={(e) => setFigureDescription(e.target.value)}
                        value={figureDescription}
                        sx={{ minWidth: "600px", marginX: 1, marginY: ".5rem" }}
                    />
                </DialogContent>
                <DialogActions sx={{ marginX: "1rem", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={handleClose}>Mégse</Button>
                    <Button onClick={() => handleSubmit()} variant="contained">Létrehozás</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}