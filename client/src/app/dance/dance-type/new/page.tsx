"use client";
import LoadingSpinner from "@/app/components/loadingSpinner";
import { Label } from "@mui/icons-material";
import { Box, Button, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewDanceTypePage() {
    const [danceTypeName, setDanceTypeName] = useState<string>("");
    const [categoryId, setCategoryId] = useState<number>(0); 
    const [categories, setCategories] = useState<{ id: number, name: string }[]>([]);

    const router = useRouter();
    
    const isInputValid = () => {
        if(categoryId === 0){
            return false;
        }

        if(danceTypeName === "" || danceTypeName.length < 2) return false;
        
        return true;
    }

    const handleCreateButton = async () => {
        if (!isInputValid()) {
            console.log("Error");
            return;
        }

        const payload = {
            name: danceTypeName,
            danceCategoryId: categoryId
        };
        const response = await axios.post("http://localhost:3001/dance-types", payload)
        if (response.status >= 200 && response.status < 300) {
            console.log("Sikeres tánctípus létrehozás!"); //TODO snackbar
            router.push("/") //TODO: maybe to danceTypes page
        }

    }

    //get categories from server
    useEffect(() => {
        async function getDanceCategories() {
            try {
                const response = await axios.get("http://localhost:3001/dance-categories") //TODO: where id ...
                setCategories(response.data);
            } catch (error) {
                //TODO snackbar
            }
        }
        setCategoryId(0);
        getDanceCategories();
    }, []);

    return (
        <>
            {categories.length == 0 ? <LoadingSpinner /> :
                <Box justifySelf="center" alignSelf="center" >
                    <Paper elevation={3} sx={{ alignItems: "center", paddingY: 4, paddingX: 8, flexDirection: "column", display: "flex", gap: 2, flexGrow: 0 }}>
                        <Typography variant="h4" align="center">Új tánctípus felvétele</Typography>
                        <TextField fullWidth onChange={(e) => setDanceTypeName(e.target.value)} value={danceTypeName} variant="outlined" placeholder="Tánctípus neve"></TextField>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            fullWidth
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value as number)}
                            variant="outlined"
                        >
                            <MenuItem disabled value={0}>Válassz tánc kategóriát</MenuItem>
                            {categories.map((cat) => (
                                <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                            ))}
                        </Select>
                        <Button onClick={() => handleCreateButton()} variant="contained">Létrehozás</Button>
                    </Paper>
                </Box>
            }
        </>
    );
}