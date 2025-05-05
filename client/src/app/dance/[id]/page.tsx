"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Fab,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import InformationsTable from "./informationsTable";
import { Add, ArrowBack } from "@mui/icons-material";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Dance } from "@shared/dance";
import LoadingSpinner from "@/app/components/loadingSpinner";
import { DanceNote } from "@shared/dance-note";
import NewDanceNoteDialog from "./NewDanceNoteDialog";

export default function DancePage() {
  const params = useParams();
  const router = useRouter();
  const [dance, setDance] = useState<Dance>();
  const [danceNotes, setDanceNotes] = useState<DanceNote[]>();

  const [open, setOpen] = useState<boolean>(false);
  const _setOpen = (value: boolean) => {
    setOpen(value);
    fetchDanceNotes();
  }

  async function fetchDanceNotes() {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/dance-notes/dance/${params.id}`
    );
    setDanceNotes(res.data);
  }

  useEffect(() => {
    async function fetchDance() {
      const danceRes = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/dance/${params.id}`
      );
      setDance(danceRes.data);
    }

    

    fetchDance();
    fetchDanceNotes();
  }, []);

  return (
    // TODO btn: Add to collection
    // TODO btn: Start practice session
    dance ? (
      <div>
        <IconButton onClick={() => router.back()}>
          <ArrowBack />
        </IconButton>
        <Typography sx={{ marginBottom: 2 }} variant="h3" textAlign={"center"}>
          {dance?.danceType.name}: {dance?.name}
        </Typography>
        <InformationsTable /> {/*TODO*/}
        
        {/* Ide jönnek a note-ok */}
        {danceNotes && danceNotes?.length > 0 ? (<>
          <Typography sx={{ marginTop: "1.5rem", marginBottom: "0.75rem", marginLeft: ".5rem"}} variant="h5">
          Jegyzetek
        </Typography>
        {danceNotes?.map((note, index) => (
          <Paper sx={{margin: "1rem", padding: "1rem"}} key={index}>
            <Link href={`/dance/note/${note.id}`}>
            <Typography variant="h6">{note.name}</Typography>
            </Link>
            <Typography>{new Date(note.createdAt).getFullYear().toString() ?? ""}</Typography>
            <Typography>{note.figures.length} figura</Typography>
          </Paper>
        ))}</>) : (<Typography variant="h5" align="center">Még nincs jegyzeted, adj hozzá a lenti gombbal</Typography>)}
        <Fab
          onClick={() => setOpen(true)}
          sx={{ position: "fixed", bottom: "16px", right: "16px" }}
          color="primary"
          variant="circular"
        >
          <Add />
        </Fab>
        <NewDanceNoteDialog open={open} setOpen={_setOpen} dance={dance}/>
        {/* TODO: Ide jönnek a figurák, csoportokba foglalva */}
        {/* for ciklus */}
        {/* <Accordion defaultExpanded elevation={3} sx={{ width: '60%', justifySelf: 'center', alignSelf: 'center', borderRadius: '8px', marginTop: '1rem' }}>
                <AccordionSummary sx={{borderBottom: '1px solid grey'}}>
                    <Typography variant="h5">Bevonulások</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    { TODO: Linkek }
                    <div>
                        <div>
                            <Typography variant="h6"><Link href="">Futós</Link></Typography>
                        </div>

                        <div>
                            <Typography variant="h6">
                                <Link href="">Árus bevonulás</Link>
                            </Typography>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion> */}
      </div>
    ) : (
      <LoadingSpinner />
    )
  );
}
