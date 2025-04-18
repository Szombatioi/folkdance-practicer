'use client'
import { ArrowBack } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import axios from "axios"
import { useParams } from "next/navigation"
import { Figure } from "@shared/figure"
import InformationsTable from "./informationsTable"

export default function Dance(){
    const params = useParams()
    const id = params.id
    // const dance = axios.get().data;
    const figure: Figure = {
        id: 1,
        name: "Árus bevonulás",
        figure_category: "Bevonulás",
        dance_part: "???",
        dance: {
            id: 1,
            name: "Csárdás",
            description: "???",
            video_url: "???",
        }
    }
    return (
        <div>
            <IconButton>
                <ArrowBack />
            </IconButton>
            <Typography sx={{marginBottom: '1rem'}} variant="h3" textAlign={"center"}>{figure.figure_category}: {figure.name}</Typography>
            <InformationsTable />

            
            {/* {process.env.NEXT_PUBLIC_BACKEND_URL} */}
        </div>
    )
}