import { Box, Paper, Typography } from "@mui/material";
import { Area } from "@shared/area";
import { Music } from "@shared/music";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

interface AreaBoxParameters{
    area: Area
}
export default function AreaBox({area}: AreaBoxParameters){
    //TODO
    // const [musics, setMusics] = useState<Music[]>([]);
    // useEffect(() => {
    //     async function fetchMusics() {
    //         const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/music`);
    //         if (response.status === 200) {
    //             console.log("res", response.data);
    //             console.log(area.id)
    //             setMusics(response.data);
    //         } else {
    //             console.error("Failed to fetch music data");
    //         }
    //     }

    //     fetchMusics();
    // }, []);

    return (
        <>
        <Box sx={{position: "relative"}}>
            <Paper sx={{padding: "1rem", overflow: "hidden"}} elevation={3}>
                <div 
                    style={{
                        margin: ".5rem", 
                        marginLeft: "auto", 
                        marginRight: "auto", 
                        display: "block", 
                        position: "relative", 
                        width: "100%", 
                        maxWidth: "320px", 
                        aspectRatio: "5 / 4", 
                        // backgroundColor: "red"
                    }} 
                    className="image">
                        <Image 
                            src="https://placehold.co/600x400/EEE/31343C.png" 
                            alt="Placeholder" 
                            layout="fill" 
                            objectFit="cover" 
                        />
                </div>
                <Typography variant="h6">
                    <Link href={`/music/area/${area.id}`}>
                        {area.name}
                    </Link>
                </Typography>
                {/* <Typography variant="subtitle1" style={{fontStyle: "italic"}}>
                    {musics.filter(m => m.area.id === area.id).length} dal
                </Typography> */}
            </Paper>
        </Box>
        </>
    )
}