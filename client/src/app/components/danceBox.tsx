import { Paper, Typography } from "@mui/material";

export default function DanceBox({dance}: {dance: {title: string, daysSincePractice: number, land: string}}) { //TODO: Dance type

    return (
        <div>
            <Paper sx={{padding: '1rem 2rem', margin: '1rem', minWidth: '75vw', textAlign: 'center'}} elevation={1}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                        <Typography variant="h6">{dance.title}</Typography>
                        <Typography variant="subtitle1">{dance.daysSincePractice} napja</Typography>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                        <Typography variant="subtitle1">{dance.land}</Typography>
                    </div>
                </div>
            </Paper>
        </div>
    );
}