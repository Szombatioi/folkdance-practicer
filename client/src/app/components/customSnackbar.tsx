'use client';

import { Snackbar, Alert } from "@mui/material";

interface CustomSnackbarProps {
    message: string;
    severity: "error" | "warning" | "info" | "success";
    open: boolean;
    onClose: () => void;
}

export default function CustomSnackbar({ message, severity, open, onClose }: CustomSnackbarProps) {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
            <Alert severity={severity} variant="filled" onClose={onClose}>
                {message}
            </Alert>
        </Snackbar>
    );
}