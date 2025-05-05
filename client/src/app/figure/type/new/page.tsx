"use client";
import CustomSnackbar from "@/app/components/customSnackbar";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewFigureTypePage() {
    const [figureTypeName, setFigureTypeName] = useState<string>("");
    const router = useRouter();
    const handleCreateButton = async () => {
        const payload = {
            name: figureTypeName,
        };
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/figure-types`, payload)
        if (response.status >= 200 && response.status < 300) {
            router.push("/") //TODO: maybe to dialects page
        }
        else{
            // TODO
        }

    }

    return (
        <>
            <Box justifySelf="center" alignSelf="center" >
                <Paper elevation={3} sx={{ alignItems: "center", paddingY: 4, paddingX: 8, flexDirection: "column", display: "flex", gap: 2, flexGrow: 0 }}>
                    <Typography variant="h4" align="center">Új figura típus felvétele</Typography>
                    <TextField onChange={(e) => setFigureTypeName(e.target.value)} value={figureTypeName} variant="outlined" placeholder="Típus neve"></TextField>
                    <Button onClick={() => handleCreateButton()} variant="contained">Létrehozás</Button>
                </Paper>
            </Box>
        </>
    );
}