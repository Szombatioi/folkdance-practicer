'use client';
import { Accordion, AccordionSummary, Typography, AccordionDetails, TableContainer, Table, TableBody, TableCell } from "@mui/material";
import TableRow from "@mui/material/TableRow";

export default function InformationsTable() {
    const areasAndOrLands = true ? (
        <TableRow> {/*Tájegység*/}
            <TableCell style={{ borderBottom: '1px solid grey' }}>Tájegység</TableCell>
            <TableCell style={{ borderBottom: '1px solid grey' }}>Érték</TableCell>
        </TableRow>
    ) : (
        <>
            <TableRow> {/*Tájegység*/}
                <TableCell>Tájegység</TableCell>
                <TableCell>Érték</TableCell>
            </TableRow>
            <TableRow> {/*Falu*/}
                <TableCell style={{ borderBottom: '1px solid grey' }}>Település</TableCell>
                <TableCell style={{ borderBottom: '1px solid grey' }}>Érték</TableCell>
            </TableRow>
        </>
    );

    return (
        <Accordion elevation={3} sx={{ width: '60%', justifySelf: 'center', alignSelf: 'center' }}>
            <AccordionSummary>
                <Typography variant="h5">Információ</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <TableContainer sx={{ border: '1px solid grey', borderRadius: '8px', justifySelf: 'center', width: '60%' }}>
                    <Table>
                        <TableBody>
                            <TableRow> {/*Dialektus*/}
                                <TableCell>Táncdialektus</TableCell>
                                <TableCell>Érték</TableCell>
                            </TableRow>

                            <TableRow> {/*Régió*/}
                                <TableCell>Régió</TableCell>
                                <TableCell>Érték</TableCell>
                            </TableRow>

                            {areasAndOrLands}

                            <TableRow> {/*Tánc címe*/}
                                <TableCell>Tánc címe</TableCell>
                                <TableCell>Érték</TableCell>
                            </TableRow>

                            <TableRow> {/*Tánc kategória*/}
                                <TableCell style={{ borderBottom: '1px solid grey' }}>Kategória</TableCell>
                                <TableCell style={{ borderBottom: '1px solid grey' }}>Érték</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </AccordionDetails>
        </Accordion>
    )
}