"use client";
import { DanceNote } from "@shared/dance-note";
import { FigureType } from "@shared/figure-type";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotePage() {
  const params = useParams();

  const [danceNote, setDanceNote] = useState<DanceNote>();
  const [figureTypes, setFigureTypes] = useState<FigureType[]>([]);
  useEffect(() => {
    async function fetchNote() {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/dance-notes/${params.id}`
      );
      if (res.status !== 200 && res.status !== 304) {
        //TODO snackbar
        console.log("Error at fetch");
        return;
      }
      console.log("Dance note found");
      setDanceNote(res.data);
      console.log(res.data);
      collectFigureTypes(res.data);
    }

    function collectFigureTypes(_danceNote: DanceNote) {
      _danceNote!.figures.forEach((f) => {
        if (figureTypes.find((f) => f.id !== f.id) === undefined){
            setFigureTypes((prev) => [...prev, f.figureType]);
        }
      });
    }

    fetchNote();
  }, []);
  return (
    <>
      {figureTypes.length > 0 && figureTypes.map((f, index) => <p key={f.id}>{f.name}</p>)}
    </>
  );
}
