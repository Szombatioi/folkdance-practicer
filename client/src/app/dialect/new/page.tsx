"use client";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewDialectPage() {
    const [dialectName, setDialectName] = useState<string>("");
    const router = useRouter();
    const handleCreateButton = async () => {
        const payload = {
            name: dialectName,
        };
        const response = await axios.post("http://localhost:3001/dialect", payload)
        if(response.status >= 200 && response.status < 300){
            console.log("Sikeres dialektus létrehozás!"); //TODO snackbar
            router.push("/") //TODO: maybe to dialects page
        }

    }
    
    return(
        <Box justifySelf="center" alignSelf="center" >
            <Paper elevation={3} sx={{ alignItems: "center", paddingY: 4, paddingX: 8, flexDirection: "column", display: "flex", gap: 2, flexGrow: 0 }}>
                <Typography variant="h4" align="center">Új dialektus felvétele</Typography>
                <TextField onChange={(e) => setDialectName(e.target.value)} value={dialectName} variant="outlined" placeholder="Dialektus neve"></TextField>
                <Button onClick={() => handleCreateButton()} variant="contained">Létrehozás</Button>
            </Paper>
        </Box>
    );
}