"use client";
import { Add, ArrowBack } from "@mui/icons-material";
import { Fab, IconButton, List, ListItem, Tooltip, Typography } from "@mui/material";
import { DanceNote } from "@shared/dance-note";
import { FigureType } from "@shared/figure-type";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NewFigureDialog from "./NewFigureDialog";
import LoadingSpinner from "@/app/components/loadingSpinner";

export default function NotePage() {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false); //For the new figure dialog
  const _setOpen = (value: boolean) => {
    console.log("HELO");
    setOpen(value);
    setTimeout(() => { router.refresh(); }, 0);
  }

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
      setDanceNote(res.data);
      collectFigureTypes(res.data);
    }

    function collectFigureTypes(_danceNote: DanceNote) {
      const seen = new Set<number>();
      const uniqueTypes: FigureType[] = [];

      _danceNote.figures.forEach((f) => {
        if (!seen.has(f.figureType.id)) {
          seen.add(f.figureType.id);
          uniqueTypes.push(f.figureType);
        }
      });

      console.log(_danceNote!.figures);
      setFigureTypes(uniqueTypes);
    }

    fetchNote();
  }, []);
  return (
    <>
      <IconButton style={{ margin: "1rem" }} onClick={() => router.back()}>
        <ArrowBack />
      </IconButton>
      {danceNote ?
        (<>
          <Typography borderBottom="1px solid black" align="center" variant="h2">Tánc: {danceNote?.dance.name}</Typography>
          <Typography variant="h5" align="center">Jegyzet: {danceNote?.name}</Typography>

          {figureTypes.length > 0 ? figureTypes.map((f_type, f_type_index) => (
            <div style={{marginBottom: 16}} key={f_type_index}>
              <Typography color="#002060" variant="h4">{f_type.name}</Typography>
              {
                danceNote.figures.filter(f => f.figureType.id === f_type.id).map((figure, figure_index) => (
                  <div key={figure_index}>
                    {figure.name.length > 0 ? 
                    <Typography color="#2F5496" variant="h5">{figure.name}</Typography> : <></>}
                    {figure.description && <>
                      <ul style={{ marginLeft: "2rem" }}>
                        {figure.description.split('\n').filter(line => line.length > 0).map((line, idx) => (
                          <li key={idx}><Typography fontSize={20} variant="body1">{line}</Typography></li>
                        ))}
                      </ul>
                    </>}
                  </div>
                ))
              }
            </div>
          )) : <>
            <Typography marginTop={4} variant="h6" align="center">Még nincsenek figurák, jobb alul tudsz hozzáadni</Typography>
          </>}

          <Tooltip title="Új figura hozzáadása" placement="top" arrow>
            <Fab
              onClick={() => setOpen(true)}
              sx={{ position: "fixed", bottom: "16px", right: "16px" }}
              color="primary"
              variant="circular"
            >
              <Add />
            </Fab>
          </Tooltip>

          <NewFigureDialog open={open} setOpen={_setOpen} danceNote={danceNote!} />
        </>
        ) : (<>
          <LoadingSpinner />
        </>)}
    </>
  );
}
