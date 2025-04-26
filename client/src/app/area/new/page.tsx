"use client";
import LoadingSpinner from "@/app/components/loadingSpinner";
import { Label } from "@mui/icons-material";
import { Box, Button, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewareaPage() {
    const [areaName, setareaName] = useState<string>("");
    const [regionId, setregionId] = useState<number>(0); //TODO: get regions from server and set the id
    const [regions, setregions] = useState<{ id: number, name: string }[]>([]); //TODO: create region type

    const router = useRouter();
    
    const isInputValid = () => {
        if(regionId === 0){
            return false;
        }

        if(areaName === "" || areaName.length < 2) return false;
        
        return true;
    }

    const handleCreateButton = async () => {
        if (!isInputValid()) {
            console.log("Errir");
            return;
        }

        const payload = {
            name: areaName,
            regionId: regionId
        };
        const response = await axios.post("http://localhost:3001/area", payload)
        if (response.status >= 200 && response.status < 300) {
            console.log("Sikeres tájegység létrehozás!"); //TODO snackbar
            router.push("/") //TODO: maybe to areas page
        }

    }

    //get regions from server
    useEffect(() => {
        async function getregions() {
            try {
                const response = await axios.get("http://localhost:3001/region") //TODO: where id ...
                setregions(response.data);
            } catch (error) {
                //TODO snackbar
            }
        }
        setregionId(0);
        getregions();
    }, []);

    return (
        <>
            {regions.length == 0 ? <LoadingSpinner /> :
                <Box justifySelf="center" alignSelf="center" >
                    <Paper elevation={3} sx={{ alignItems: "center", paddingY: 4, paddingX: 8, flexDirection: "column", display: "flex", gap: 2, flexGrow: 0 }}>
                        <Typography variant="h4" align="center">Új tájegység felvétele</Typography>
                        <TextField fullWidth onChange={(e) => setareaName(e.target.value)} value={areaName} variant="outlined" placeholder="Tájegység neve"></TextField>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            fullWidth
                            value={regionId}
                            onChange={(e) => setregionId(e.target.value as number)}
                            variant="outlined"
                        >
                            <MenuItem disabled value={0}>Válassz régiót</MenuItem>
                            {regions.map((region) => (
                                <MenuItem key={region.id} value={region.id}>{region.name}<span style={{marginLeft: 8, color: "grey"}}>({region.dialect.name})</span></MenuItem>
                            ))}
                        </Select>
                        <Button onClick={() => handleCreateButton()} variant="contained">Létrehozás</Button>
                    </Paper>
                </Box>
            }
        </>
    );
}