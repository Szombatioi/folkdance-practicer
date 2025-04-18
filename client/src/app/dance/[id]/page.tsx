'use client'
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, IconButton, Typography } from "@mui/material";
import InformationsTable from "./informationsTable";
import { ArrowBack } from "@mui/icons-material";
import Link from "next/link";

export default function Dance(/*TODO: Dance*/) {

    return (
        // TODO btn: Add to collection
        // TODO btn: Start practice session
        <div>
            <IconButton>
                <ArrowBack />
            </IconButton>
            <Typography variant="h3" textAlign={"center"}>Férfitánc: Mérai legényes</Typography>
            <InformationsTable />

            {/* TODO: Ide jönnek a figurák, csoportokba foglalva */}
            {/* for ciklus */}

            <Accordion elevation={3} sx={{ width: '60%', justifySelf: 'center', alignSelf: 'center' }}>
                <AccordionSummary sx={{borderBottom: '1px solid grey'}}>
                    <Typography variant="h5">Bevonulások</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {/* TODO: Linkek */}
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
            </Accordion>
        </div>
    );
}