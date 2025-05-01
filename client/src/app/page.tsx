"use client";

import { Typography } from "@mui/material";
import MiniDrawer from "./components/drawer";
import DanceBox from "./components/danceBox";
import { JSX, useEffect, useState } from "react";
import axios from "axios";
import Practice from "@shared/practice";

export default function Home() {
  // const elements: JSX.Element[] = [];
  const [practices, setPractices] = useState<Practice[]>([]);

  useEffect(() => {
    async function fetchDances() {
      const practiceRes = await axios.get<Practice[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/practice`);
      console.log(practiceRes.data);
      setPractices(practiceRes.data);
      // if(practices.status >= 200 && practices.status < 300){
      //   practices.data.forEach(p => {
      //     elements.push(<DanceBox key={p.id} practice={p} />);
      //     console.log(p.dance.name);
      //   });
      // }
    }

    fetchDances();
  }, []);

  // const dance = {
  //   title: "Kalotaszegi legényes",
  //   daysSincePractice: 22,
  //   land: "Kalotaszeg",
  // };

  // for (let i = 0; i < 10; i++) {
  //   elements.push(<DanceBox key={i} pra={dance} />);
  // }

  return (
    <>
      <Typography variant="h2" align="center">
        Táncaid
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          {practices.map(p => <DanceBox key={p.id} practice={p}/>)}
        </div>
      </div>
    </>
  );
}
