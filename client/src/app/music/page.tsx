"use client";
//itt tájegységek lesznek mutatva

import { Area } from "@shared/area";
import axios from "axios";
import { useEffect, useState } from "react";
import AreaBox from "./areaBox";

export default function MusicMainPage() {
  const [areas, setAreas] = useState<Area[]>();

  //TODO:
  //add to each box how many music, lyric and links are there

  useEffect(() => {
    async function fetchAreas() {
      const areaRes = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/area`
      );
      setAreas(areaRes.data);
    }

    fetchAreas();
  }, []);

  return (
    <>
      <div style={{ marginLeft: "auto", marginRight: "auto", display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {areas?.map((area, index) => (
          <div key={index} style={{minWidth: "30%", maxWidth: "30%", flex: "1 0 30%"}}>
            <AreaBox area={area} />
          </div>
        ))}
      </div>
    </>
  );
}
