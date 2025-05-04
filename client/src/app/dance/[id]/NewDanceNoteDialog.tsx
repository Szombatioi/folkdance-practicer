"use client"

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { Dance } from "@shared/dance";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

export default function NewDanceNoteDialog({open, setOpen, dance}: {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>,dance: Dance}){
    // const [open, setOpen] = useState<boolean>(false)
    const [title, setTitle] = useState<string>("");

    const handleClose = () => {
        setOpen(false);
    }

    const handleSubmit = async () => {
        if(title?.length <= 0){
            //TODO snackbar
            return;
        }

        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/dance-notes`, {
            name: title,
            danceId: dance.id
        });

        handleClose();
    }

    return (
        <>
            <Dialog sx={{padding: "2rem"}} open={open} onClose={handleClose} >
                <DialogTitle>
                    Új jegyzet felvétele ehhez: {dance.name}
                </DialogTitle>
                <DialogContent sx={{textAlign: "center"}}>
                    <TextField 
                        margin="dense"
                        autoFocus
                        label="Cím"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </DialogContent>
                <DialogActions sx={{marginX: "1rem",display: "flex", justifyContent: "space-between"}}>
                    <Button onClick={handleClose}>Mégse</Button>
                    <Button onClick={handleSubmit}>Létrehozás</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}