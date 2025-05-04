"use client";

import { Fab, Typography } from "@mui/material";
import MiniDrawer from "./components/drawer";
import DanceBox from "./components/danceBox";
import { JSX, useEffect, useState } from "react";
import axios from "axios";
import Practice from "@shared/practice";
import { Add } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { Dance } from "@shared/dance";

export default function Home() {
  // const elements: JSX.Element[] = [];
  // const [practices, setPractices] = useState<Practice[]>([]); //TODO valahogy mergeljük a dance-kkel
  const [dances, setDances] = useState<Dance[]>();
  const router = useRouter();

  useEffect(() => {
    async function fetchDances() {
      const dancesRes = await axios.get<Dance[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/dance`);
      if(dancesRes.status === 200){
        setDances(dancesRes.data);
      }
      else{
        //TODO
      }
      // const practiceRes = await axios.get<Practice[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/practice`);
      // console.log(practiceRes.data);
      // setPractices(practiceRes.data);
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
          {dances && dances.map(d => <DanceBox key={d.id} dance={d} lastPractice={new Date()}/>)} { /*TODO lastPractice */ }
        </div>
      </div>

      <Fab onClick={() => router.push("/dance/new")} sx={{position: "fixed", bottom: "16px", right: "16px"}} color="primary" variant="circular">
        <Add />
      </Fab>
    </>
  );
}
