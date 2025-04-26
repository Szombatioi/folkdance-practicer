"use client";
import CustomSnackbar from "@/app/components/customSnackbar";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewDialectPage() {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<"error" | "warning" | "info" | "success">("error");

    const [dialectName, setDialectName] = useState<string>("");
    const router = useRouter();
    const handleCreateButton = async () => {
        const payload = {
            name: dialectName,
        };
        const response = await axios.post("http://localhost:3001/dialect", payload)
        if (response.status >= 200 && response.status < 300) {
            setSnackbarMessage("Dialektus sikeresen létrehozva!");
            setSnackbarSeverity("success");
            setSnackbarOpen(true);
            router.push("/") //TODO: maybe to dialects page
        }
        else{
            setSnackbarMessage("Hiba történt a dialektus létrehozása során!");
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
        }

    }

    return (
        <>
            <Box justifySelf="center" alignSelf="center" >
                <Paper elevation={3} sx={{ alignItems: "center", paddingY: 4, paddingX: 8, flexDirection: "column", display: "flex", gap: 2, flexGrow: 0 }}>
                    <Typography variant="h4" align="center">Új dialektus felvétele</Typography>
                    <TextField onChange={(e) => setDialectName(e.target.value)} value={dialectName} variant="outlined" placeholder="Dialektus neve"></TextField>
                    <Button onClick={() => handleCreateButton()} variant="contained">Létrehozás</Button>
                </Paper>
            </Box>
            <CustomSnackbar
                message={snackbarMessage}
                severity={snackbarSeverity}
                open={snackbarOpen}
                onClose={() => setSnackbarOpen(false)}
            />
        </>
    );
}