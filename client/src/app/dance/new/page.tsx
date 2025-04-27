"use client";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Box, IconButton, Paper, TextField, Typography } from "@mui/material";
import axios from 'axios';
import { useState } from "react";

export default function NewDancePage() {
    const [danceName, setDanceName] = useState<string>("");
    const [danceCategory, setDanceCategory] = useState<string>("");
    const [danceType, setDanceType] = useState<string>("");
    const [danceDialect, setDanceDialect] = useState<string>("");
    const [danceRegion, setDanceRegion] = useState<string>("");
    const [danceArea, setDanceArea] = useState<string>("");
    const [danceLand, setDanceLand] = useState<string>("");


    const autoFill = async () => {
        try{
            const prediction = await axios.post("http://localhost:3001/predict", {
                title: danceName
            });

            setPredictions(prediction.data);
        } catch(error)  {
            //TODO: snackbar
        }
    };

    const setPredictions = (prediction: {
        dance_category: string,
        dance_type: string,
        dialect: string,
        region: string,
        area: string,
        land: string[]
    }) => {
        setDanceCategory(prediction.dance_category);
        setDanceType(prediction.dance_type);
        setDanceDialect(prediction.dialect);
        setDanceRegion(prediction.region);
        setDanceArea(prediction.area);
        // setDanceLand(prediction.land.length); //TODO: maybe we won't do this afterall...

        console.log(danceCategory);
        console.log(danceType);
        console.log(danceDialect);
        console.log(danceRegion);
        console.log(danceArea);
        console.log(danceLand);
    };

    return (
        <>
            <Box justifySelf="center" alignSelf="center" >
                <Paper elevation={3} sx={{ alignItems: "center", paddingY: 4, paddingX: 8, flexDirection: "column", display: "flex", gap: 2, flexGrow: 0 }}>
                    <Typography variant="h4" align="center">Új tánc felvétele</Typography>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <TextField onChange={(e) => setDanceName(e.target.value)} value={danceName} variant="outlined" placeholder="Tánc neve"></TextField>
                        <IconButton onClick={() => autoFill()} title='Automatikus kitöltés név alapján' sx={{borderRadius: 0, marginLeft: 1}}>
                            <AutoAwesomeIcon />
                        </IconButton >
                    </div>
                </Paper>
            </Box>
        </>
    );
}