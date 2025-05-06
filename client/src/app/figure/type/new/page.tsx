"use client";
import CustomSnackbar from "@/app/components/customSnackbar";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Dialect } from "@shared/dialect";
import { FigureType } from "@shared/figure-type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewFigureTypePage() {
    const [figureTypeName, setFigureTypeName] = useState<string>("");
    const router = useRouter();

    const [figureTypes, setFigureTypes] = useState<FigureType[]>([]);

    const fetchDialects = async () => {
        const response = await axios.get("http://localhost:3001/figure-types");
        if (response.status >= 200 && response.status < 300) {
            setFigureTypes(response.data);
        }
    }

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
            <Box margin={4} justifySelf="center" alignSelf="center" >
                <Paper elevation={3} sx={{ alignItems: "center", paddingY: 4, paddingX: 8, flexDirection: "column", display: "flex", gap: 2, flexGrow: 0 }}>
                    <Typography variant="h4" align="center">Új figura típus felvétele</Typography>
                    <TextField onChange={(e) => setFigureTypeName(e.target.value)} value={figureTypeName} variant="outlined" placeholder="Típus neve"></TextField>
                    <Button onClick={() => handleCreateButton()} variant="contained">Létrehozás</Button>
                </Paper>
            </Box>
            <Box margin={4} justifySelf="center" alignSelf="center" >
                <Paper elevation={3} sx={{ alignItems: "center", paddingY: 4, paddingX: 8, flexDirection: "column", display: "flex", gap: 2, flexGrow: 0 }}>
                    <Typography variant="h4" align="center">Figura típusok lekérdezése</Typography>
                    <Button onClick={() => fetchDialects()} variant="contained">Lekérdezés</Button>
                    {figureTypes.length > 0 && (
                        <TableContainer style={{ width: "300px", border: "1px solid grey", borderRadius: "8px" }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell colSpan={2} align="center">Típus neve</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {figureTypes.map((figureType, index) => (
                                        <TableRow key={index}>
                                            <TableCell width={24} align="center">{index + 1}</TableCell>
                                            <TableCell align="center">{figureType.name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </Paper>
            </Box>
        </>
    );
}