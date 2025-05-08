"use client";
import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import axios from 'axios';
import { Dialect } from '@shared/dialect';

interface EditDialectDialogProps {
    open: boolean;
    onClose: () => void;
    dialect: Dialect | null;
}

const EditDialectDialog: React.FC<EditDialectDialogProps> = ({ open, onClose, dialect }) => {
    const [name, setName] = useState<string>();

    useEffect(() => {
        if (open && dialect) {
            setName(dialect.name);
        }
    }, [open, dialect]);

    const handleSave = async () => {
        const res = await axios.patch(`http://localhost:3001/dialect/${dialect?.id}`, { name });
        if(res.status >= 200 && res.status < 300) 
        {
            //TODO snackbar
            onClose();
        }
        else{
            //TODO snackbar
            console.log("Error");
        }
        
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Dialektus szerkesztése</DialogTitle>
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

export default EditDialectDialog;