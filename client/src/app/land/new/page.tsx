"use client";
import LoadingSpinner from "@/app/components/loadingSpinner";
import { Label } from "@mui/icons-material";
import { Box, Button, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewlandPage() {
    const [landName, setlandName] = useState<string>("");
    const [areaId, setareaId] = useState<number>(0); //TODO: get areas from server and set the id
    const [areas, setareas] = useState<{ id: number, name: string }[]>([]); //TODO: create area type

    const router = useRouter();
    
    const isInputValid = () => {
        if(areaId === 0){
            return false;
        }

        if(landName === "" || landName.length < 2) return false;
        
        return true;
    }

    const handleCreateButton = async () => {
        if (!isInputValid()) {
            console.log("Errir");
            return;
        }

        const payload = {
            name: landName,
            areaId: areaId
        };
        const response = await axios.post("http://localhost:3001/land", payload)
        if (response.status >= 200 && response.status < 300) {
            console.log("Sikeres település létrehozás!"); //TODO snackbar
            router.push("/") //TODO: maybe to lands page
        }

    }

    //get areas from server
    useEffect(() => {
        async function getareas() {
            try {
                const response = await axios.get("http://localhost:3001/area") //TODO: where id ...
                setareas(response.data);
            } catch (error) {
                //TODO snackbar
            }
        }
        setareaId(0);
        getareas();
    }, []);

    return (
        <>
            {areas.length == 0 ? <LoadingSpinner /> :
                <Box justifySelf="center" alignSelf="center" >
                    <Paper elevation={3} sx={{ alignItems: "center", paddingY: 4, paddingX: 8, flexDirection: "column", display: "flex", gap: 2, flexGrow: 0 }}>
                        <Typography variant="h4" align="center">Új település felvétele</Typography>
                        <TextField fullWidth onChange={(e) => setlandName(e.target.value)} value={landName} variant="outlined" placeholder="Település neve"></TextField>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            fullWidth
                            value={areaId}
                            onChange={(e) => setareaId(e.target.value as number)}
                            variant="outlined"
                        >
                            <MenuItem disabled value={0}>Válassz tájegységet</MenuItem>
                            {areas.map((area) => (
                                <MenuItem key={area.id} value={area.id}>{area.name}<span style={{marginLeft: 8, color: "grey"}}>({area.region.name})</span></MenuItem>
                            ))}
                        </Select>
                        <Button onClick={() => handleCreateButton()} variant="contained">Létrehozás</Button>
                    </Paper>
                </Box>
            }
        </>
    );
}