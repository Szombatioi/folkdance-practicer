"use client";
import CustomSnackbar from "@/app/components/customSnackbar";
import {
  Autocomplete,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DanceNote } from "@shared/dance-note";
import { FigureType } from "@shared/figure-type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewFigurePage() {
  const [figureName, setFigureName] = useState<string>("");
  const [figureDescription, setFigureDescription] = useState<string>("");

  const [availableDanceNotes, setAvailableDanceNotes] = useState<DanceNote[]>();
  const [selectedDanceNote, setSelectedDanceNote] = useState<DanceNote>();
  const [availableFigureTypes, setAvailableFigureTypes] = useState<FigureType[]>();
  const [selectedFigureType, setSelectedFigureType] = useState<FigureType>();

  const router = useRouter();
  const handleCreateButton = async () => {
    const payload = {
      name: figureName,
      description: figureDescription,
      figureTypeId: selectedFigureType?.id,
      danceNoteId: selectedDanceNote?.id
    };
    const response = await axios.post("http://localhost:3001/figures", payload);
    if (response.status >= 200 && response.status < 300) {
      router.push("/"); //TODO: maybe to dialects page
    } else {
      //TODO snackbar
    }
  };

  useEffect(() => {
    async function fetchDances() {
      const dancesRes = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/dance-notes`
      );
      setAvailableDanceNotes(dancesRes.data);
    }

    async function fetchFigureTypes() {
      const ftRes = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/figure-types`
      );
      setAvailableFigureTypes(ftRes.data);
    }

    fetchDances();
    fetchFigureTypes();
  }, []);

  return (
    <>
      <Box justifySelf="center" alignSelf="center">
        <Paper
          elevation={3}
          sx={{
            alignItems: "center",
            paddingY: 4,
            paddingX: 8,
            flexDirection: "column",
            display: "flex",
            gap: 2,
            flexGrow: 0,
          }}
        >
          <Typography variant="h4" align="center">
            Új figura felvétele
          </Typography>
          <TextField
            onChange={(e) => setFigureName(e.target.value)}
            value={figureName}
            variant="outlined"
            placeholder="Figura neve"
            sx={{ minWidth: "300px" }}
            required
          />
          <Autocomplete
            disablePortal
            options={availableDanceNotes || []}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            value={
              availableDanceNotes?.find((t) => t.id === selectedDanceNote?.id) || null
            }
            onChange={(e, v) => setSelectedDanceNote(v!)}
            sx={{ minWidth: "300px", flex: 1, marginX: 1 }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="Tánc" required />
            )}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                {option.name}
              </li>
            )}
          />
          <Autocomplete
            disablePortal
            options={availableFigureTypes || []}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            value={
              availableFigureTypes?.find(
                (t) => t.id === selectedFigureType?.id
              ) || null
            }
            onChange={(e, v) => setSelectedFigureType(v!)}
            sx={{ minWidth: "300px", flex: 1, marginX: 1 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Figura típusa"
                required
              />
            )}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                {option.name}
              </li>
            )}
          />

          <TextField
            multiline
            variant="outlined"
            label="Leírás"
            onChange={(e) => setFigureDescription(e.target.value)}
            value={figureDescription}
            sx={{ minWidth: "600px" }}
          />

          <Button onClick={() => handleCreateButton()} variant="contained">
            Létrehozás
          </Button>
        </Paper>
      </Box>
    </>
  );
}
