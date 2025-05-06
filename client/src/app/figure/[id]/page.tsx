"use client";
import { ArrowBack } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { Figure } from "@shared/figure";
import InformationsTable from "./informationsTable";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/app/components/loadingSpinner";

export default function Dance() {
  const params = useParams();
  const router = useRouter();
  const [figure, setFigure] = useState<Figure | undefined>();

  useEffect(() => {
    async function fetchFigure() {
      const figureRes = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/figures/${params.id}`
      );
      setFigure(figureRes.data);
    }

    fetchFigure();
  }, []);

  return figure ? (
    <div>
      <IconButton onClick={() => router.back()}>
        <ArrowBack />
      </IconButton>
      <Typography
        sx={{ marginBottom: "1rem" }}
        variant="h3"
        textAlign={"center"}
      >
        {figure.figureType.name}: {figure?.name}
      </Typography>
      <InformationsTable figure={figure} />

      <div style={{ fontSize: "24px",width: "75%", marginTop: "2rem", marginLeft: "auto", marginRight: "auto" }}>
        <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
          {figure.description.split("\n").map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>

      {/* {process.env.NEXT_PUBLIC_BACKEND_URL} */}
    </div>
  ) : (
    <LoadingSpinner />
  );
}
