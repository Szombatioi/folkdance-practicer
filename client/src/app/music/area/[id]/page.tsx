"use client"
//Itt az adott tájegységen belüli zenék lesznek

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Music } from "@shared/music";
import MusicBox from "./musicBox";
import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function MusicAreaPage() {
  const params = useParams();
  const router = useRouter();
  const [musics, setMusics] = useState<Music[]>();

  useEffect(() => {
    async function fetchMusic() {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/music/area/${params.id}`
      );
      setMusics(res.data);
      console.log(res.data)
    }

    fetchMusic();
  }, []);

  return <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
    <div style={{ width: "100%" }}>
      <IconButton style={{ margin: "1rem" }} onClick={() => router.back()}>
        <ArrowBack />
      </IconButton>
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {musics?.map((music, index) => (
          <div key={index} style={{ minWidth: "30%", maxWidth: "30%", flex: "1 0 30%" }}>
            <MusicBox music={music} />
          </div>
        ))}
      </div>
    </div>
  </div>
}
