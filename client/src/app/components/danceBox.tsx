import { Paper, Typography } from "@mui/material";
import { Area } from "@shared/area";
import Practice from "@shared/practice";

export default function DanceBox({practice}: {practice: Practice}) { //TODO: Dance type
    console.log(practice.lastPractice);
    return (
        <div>
            <Paper sx={{padding: '1rem 2rem', margin: '1rem', minWidth: '75vw', textAlign: 'center'}} elevation={1}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                        <Typography variant="h6">{practice.dance.name}</Typography>
                        <Typography variant="subtitle1">{new Date().getDay() - new Date(practice.lastPractice).getDay()} napja</Typography>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                        <Typography variant="subtitle1">{practice.dance.area.name}</Typography>
                    </div>
                </div>
            </Paper>
        </div>
    );
}