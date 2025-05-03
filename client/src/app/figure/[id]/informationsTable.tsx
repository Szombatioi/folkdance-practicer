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
import { Figure } from "@shared/figure";
import { useEffect, useState } from "react";
import { Structure } from "@shared/structure";
import axios from "axios";

interface InformationsTableProps {
  figure: Figure;
}

export default function InformationsTable({ figure }: InformationsTableProps) {
  const [structure, setStructure] = useState<Structure>();
  useEffect(() => {
    async function fetchStructure() {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/structure/${"area"}/${
          figure.danceNote.dance.area.id
        }`
      );
      setStructure(res.data);
    }

    fetchStructure();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>

    <Accordion
      elevation={3}
      sx={{ width: "60%", justifySelf: "center", alignSelf: "center" }}
    >
      <AccordionSummary>
        <Typography variant="h5">Információ</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer
          sx={{
            border: "1px solid grey",
            borderRadius: "8px",
            justifySelf: "center",
            width: "60%",
            mx: "auto"
          }}
        >
          <Table style={{justifySelf: "center", alignSelf: "center"}}>
            <TableBody>
              <TableRow>
                {/*Dialektus*/}
                <TableCell>Táncdialektus</TableCell>
                <TableCell>{structure?.dialect}</TableCell>
              </TableRow>

              <TableRow>
                {/*Régió*/}
                <TableCell>Régió</TableCell>
                <TableCell>{structure?.region}</TableCell>
              </TableRow>

              {/* {true ?
                <TableRow> {}
                    <TableCell style={{ borderBottom: '1px solid grey' }}>Tájegység</TableCell>
                    <TableCell style={{ borderBottom: '1px solid grey' }}>Érték</TableCell>
                </TableRow>
                :
                
            } */}

              <TableRow>
                {/*Tájegység*/}
                <TableCell style={{ borderBottom: '1px solid grey' }}>Tájegység</TableCell>
                <TableCell style={{ borderBottom: '1px solid grey' }}>{structure?.area}</TableCell>
              </TableRow>

              <TableRow>
                {/*Tánc címe*/}
                <TableCell>Tánc címe</TableCell>
                <TableCell>{figure.danceNote.dance.name}</TableCell>
              </TableRow>

              <TableRow>
                {/*Tánc kategória*/}
                <TableCell>
                  Tánc kategória
                </TableCell>
                <TableCell>
                  {figure.danceNote.dance.danceType.danceCategory.name}
                </TableCell>
              </TableRow>
              <TableRow>
                {/*Tánc típusa*/}
                <TableCell style={{ borderBottom: "1px solid grey" }}>
                  Tánc típusa
                </TableCell>
                <TableCell style={{ borderBottom: "1px solid grey" }}>
                  {figure.danceNote.dance.danceType?.name}
                </TableCell>
              </TableRow>

              {/* <TableRow>
                <TableCell>Táncrész</TableCell>
                <TableCell>Érték</TableCell>
              </TableRow> */}

              <TableRow>
                {/*Figura kategória*/}
                <TableCell>Figura kategória</TableCell>
                <TableCell>{figure.figureType.name}</TableCell>
              </TableRow>
              {/*Videó(k)*/}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
    </div>
  );
}
