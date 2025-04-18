"use client";

import { Typography } from "@mui/material";
import MiniDrawer from "./components/drawer";
import DanceBox from "./components/danceBox";

export default function Home() {
  const elements = [];
  const dance = {
    title: "Kalotaszegi legényes",
    daysSincePractice: 22,
    land: "Kalotaszeg"
  }

  for (let i = 0; i < 10; i++) {
    elements.push(<DanceBox key={i} dance={dance}/>);
  }

  return (
    <>
      <Typography variant="h2" align="center">Táncaid</Typography>

      <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
        {elements}
      </div>
    </>
  );
}
