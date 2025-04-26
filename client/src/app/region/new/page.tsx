"use client";
import LoadingSpinner from "@/app/components/loadingSpinner";
import { Label } from "@mui/icons-material";
import { Box, Button, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewregionPage() {
    const [regionName, setregionName] = useState<string>("");
    const [dialectId, setDialectId] = useState<number>(0); //TODO: get dialects from server and set the id
    const [dialects, setDialects] = useState<{ id: number, name: string }[]>([]); //TODO: create dialect type

    const router = useRouter();
    
    const isInputValid = () => {
        if(dialectId === 0){
            return false;
        }

        if(regionName === "" || regionName.length < 2) return false;
        
        return true;
    }

    const handleCreateButton = async () => {
        if (!isInputValid()) {
            console.log("Errir");
            return;
        }

        const payload = {
            name: regionName,
            dialectId: dialectId
        };
        const response = await axios.post("http://localhost:3001/region", payload)
        if (response.status >= 200 && response.status < 300) {
            console.log("Sikeres dialektus létrehozás!"); //TODO snackbar
            router.push("/") //TODO: maybe to regions page
        }

    }

    //get dialects from server
    useEffect(() => {
        async function getDialects() {
            try {
                const response = await axios.get("http://localhost:3001/dialect") //TODO: where id ...
                setDialects(response.data);
            } catch (error) {
                //TODO snackbar
            }
        }
        setDialectId(0);
        getDialects();
    }, []);

    return (
        <>
            {dialects.length == 0 ? <LoadingSpinner /> :
                <Box justifySelf="center" alignSelf="center" >
                    <Paper elevation={3} sx={{ alignItems: "center", paddingY: 4, paddingX: 8, flexDirection: "column", display: "flex", gap: 2, flexGrow: 0 }}>
                        <Typography variant="h4" align="center">Új régió felvétele</Typography>
                        <TextField fullWidth onChange={(e) => setregionName(e.target.value)} value={regionName} variant="outlined" placeholder="Régió neve"></TextField>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            fullWidth
                            value={dialectId}
                            onChange={(e) => setDialectId(e.target.value as number)}
                            variant="outlined"
                        >
                            <MenuItem disabled value={0}>Válassz dialektust</MenuItem>
                            {dialects.map((dialect) => (
                                <MenuItem key={dialect.id} value={dialect.id}>{dialect.name}</MenuItem>
                            ))}
                        </Select>
                        <Button onClick={() => handleCreateButton()} variant="contained">Létrehozás</Button>
                    </Paper>
                </Box>
            }
        </>
    );
}