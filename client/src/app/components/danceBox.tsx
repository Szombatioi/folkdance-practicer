import { Paper, Typography } from "@mui/material";
import { Area } from "@shared/area";
import { Dance } from "@shared/dance";
import Practice from "@shared/practice";
import Link from "next/link";

export default function DanceBox({dance, lastPractice}: {dance: Dance, lastPractice: Date}) { //TODO: Dance type
    // console.log(practice.lastPractice);
    return (
        <div style={{marginBottom: "1.5rem"}}>
            <Paper sx={{padding: '1.5rem 2rem', margin: '1rem', minWidth: '75vw', textAlign: 'center'}} elevation={3}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                        <Link href={`/dance/${dance.id}`}><Typography variant="h6">{dance.name}</Typography></Link>
                        <Typography variant="subtitle1">{new Date().getDay() - new Date(lastPractice).getDay()} napja</Typography>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                        <Typography variant="subtitle1">{dance.area.name}</Typography>
                    </div>
                </div>
            </Paper>
        </div>
    );
}