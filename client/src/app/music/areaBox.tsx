import { Box, Paper, Typography } from "@mui/material";
import { Area } from "@shared/area";
import Link from "next/link";

interface AreaBoxParameters{
    area: Area
}
export default function AreaBox({area}: AreaBoxParameters){
    return (
        <>
        <Box sx={{position: "relative"}}>
            <Paper sx={{padding: "1rem"}} elevation={3}>
                <div style={{margin: ".5rem", marginLeft: "auto", marginRight: "auto", display: "block", position: "relative", width: "320px", height: "256px", backgroundColor: "red"}} className="image"></div>
                <Typography variant="h6">
                    <Link href={`/music/area/${area.id}`}>
                        {area.name}
                    </Link>
                </Typography>
            </Paper>
        </Box>
        </>
    )
}