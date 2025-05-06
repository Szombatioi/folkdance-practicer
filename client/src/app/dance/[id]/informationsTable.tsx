"use client";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  TableContainer,
  Table,
  TableBody,
  TableCell,
} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import { Dance } from "@shared/dance";
import { Structure } from "@shared/structure";
import axios from "axios";
import { useEffect, useState } from "react";

export default function InformationsTable({dance}: {dance: Dance}) {
  // const areasAndOrLands = true ? (
  //     [<TableRow key={"area"}> {/*Tájegység*/}
  //         <TableCell style={{ borderBottom: '1px solid grey' }}>Tájegység</TableCell>
  //         <TableCell style={{ borderBottom: '1px solid grey' }}>Érték</TableCell>
  //     </TableRow>]
  // ) : (
  //     <>
  //         <TableRow key={"area"}> {/*Tájegység*/}
  //             <TableCell>Tájegység</TableCell>
  //             <TableCell>Érték</TableCell>
  //         </TableRow>
  //         <TableRow key={"village"}> {/*Falu*/}
  //             <TableCell style={{ borderBottom: '1px solid grey' }}>Település</TableCell>
  //             <TableCell style={{ borderBottom: '1px solid grey' }}>Érték</TableCell>
  //         </TableRow>
  //     </>
  // );
    const [structure, setStructure] = useState<Structure>();

    useEffect(() => {
        async function fetchStructure(){
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/structure/area/${dance.area.id}`);
            if(res.status === 200) setStructure(res.data);
        }

        fetchStructure();
    }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
        <Accordion
      elevation={3}
      sx={{
        width: "60%",
        justifySelf: "center",
        alignSelf: "center",
        margin: "1.5rem",
      }}
    >
      <AccordionSummary>
        <Typography variant="h5">Információ</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{display: "flex", justifyContent: "center"}}>
        <TableContainer
          sx={{
            border: "1px solid grey",
            borderRadius: "8px",
            justifySelf: "center",
            width: "75%",
          }}
        >
          <Table>
            <TableBody>
              <TableRow>
                {" "}
                {/*Dialektus*/}
                <TableCell>Táncdialektus</TableCell>
                <TableCell>{structure?.dialect}</TableCell>
              </TableRow>

              <TableRow>
                {" "}
                {/*Régió*/}
                <TableCell>Régió</TableCell>
                <TableCell>{structure?.region}</TableCell>
              </TableRow>

              {/* {areasAndOrLands} */}
              <TableRow key={"area"}>
                {" "}
                {/*Tájegység*/}
                <TableCell style={{ borderBottom: "1px solid grey" }}>
                  Tájegység
                </TableCell>
                <TableCell style={{ borderBottom: "1px solid grey" }}>
                  {structure?.area}
                </TableCell>
              </TableRow>

              <TableRow>
                {" "}
                {/*Tánc címe*/}
                <TableCell>Tánc címe</TableCell>
                <TableCell>{dance.name}</TableCell>
              </TableRow>

              <TableRow>
                {" "}
                {/*Tánc kategória*/}
                <TableCell style={{ borderBottom: "1px solid grey" }}>
                  Kategória
                </TableCell>
                <TableCell style={{ borderBottom: "1px solid grey" }}>
                  {dance.danceType.danceCategory.name}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
    </div>
  );
}
