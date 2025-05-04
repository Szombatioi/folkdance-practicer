'use client'
import { Accordion, AccordionDetails, AccordionSummary, IconButton, Typography } from "@mui/material";
import InformationsTable from "./informationsTable";
import { ArrowBack } from "@mui/icons-material";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Dance } from "@shared/dance";
import LoadingSpinner from "@/app/components/loadingSpinner";

export default function DancePage() {
    const params = useParams();
    const router = useRouter();
    const [dance, setDance] = useState<Dance>();
    useEffect(() => {
        async function fetchDance(){
            const danceRes = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/dance/${params.id}`);
            setDance(danceRes.data);
        }

        async function fetchDanceNotes() {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/notes/dance/${params.id}`);
        }

        fetchDance();
        fetchDanceNotes();
    }, []);

    return (
        // TODO btn: Add to collection
        // TODO btn: Start practice session
        dance ? <div>
            <IconButton onClick={() => router.back()}>
                <ArrowBack />
            </IconButton>
            <Typography sx={{marginBottom: 2}} variant="h3" textAlign={"center"}>{dance?.danceType.name}: {dance?.name}</Typography>
            <InformationsTable /> {/*TODO*/}

            

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
        : <LoadingSpinner />
    );
}