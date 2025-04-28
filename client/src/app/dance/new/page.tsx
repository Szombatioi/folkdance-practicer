"use client";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Box, Button, IconButton, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function NewDancePage() {
  const [danceName, setDanceName] = useState<string>("");
  const [danceCategory, setDanceCategory] = useState<string>("");
  const [danceType, setDanceType] = useState<string>("");
  const [danceDialect, setDanceDialect] = useState<string>("");
  const [danceRegion, setDanceRegion] = useState<string>("");
  const [danceArea, setDanceArea] = useState<string>("");
  const [danceLand, setDanceLand] = useState<string>("");

  const handleCreateButtonClick = async () => {
    const payload = {

    };
    const response = await axios.post(process.env.BACKEND_URL + "/dance", payload);
  }

  const autoFill = async () => {
    try {
      const prediction = await axios.post("http://localhost:3001/predict", {
        title: danceName,
      });

      setPredictions(prediction.data);
    } catch (error) {
      //TODO: snackbar
    }
  };

  const setPredictions = (prediction: {
    dance_category: string;
    dance_type: string;
    dialect: string;
    region: string;
    area: string;
    land: string[];
  }) => {
    setDanceCategory(prediction.dance_category);
    setDanceType(prediction.dance_type);
    setDanceDialect(prediction.dialect);
    setDanceRegion(prediction.region);
    setDanceArea(prediction.area);
    // setDanceLand(prediction.land.length); //TODO: maybe we won't do this afterall...

    console.log(danceCategory);
    console.log(danceType);
    console.log(danceDialect);
    console.log(danceRegion);
    console.log(danceArea);
    console.log(danceLand);
  };

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
            Új tánc felvétele
          </Typography>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                onChange={(e) => setDanceName(e.target.value)}
                value={danceName}
                variant="outlined"
                label="Tánc neve"
                sx={{ width: 300 }} // 👈 set a width for better control
              />
              <IconButton
                onClick={() => autoFill()}
                title="Automatikus kitöltés név alapján"
                sx={{ borderRadius: 0, marginLeft: 1 }}
              >
                <AutoAwesomeIcon />
              </IconButton>
            </div>
          </div>
          <div className="divider" style={{height: "1px", width: "50%", borderTop: "1px solid black;"}}></div>
          <div className="row">
            <TextField
              sx={{ marginX: 1 }}
              onChange={(e) => setDanceCategory(e.target.value)}
              value={danceCategory}
              variant="outlined"
              label="Tánc kategória"
              disabled
            />
            <TextField
              sx={{ marginX: 1 }}
              onChange={(e) => setDanceType(e.target.value)}
              value={danceType}
              variant="outlined"
              label="Tánctípus"
              disabled
            />
          </div>

          <div className="row">
            <TextField
              sx={{ marginX: 1 }}
              onChange={(e) => setDanceDialect(e.target.value)}
              value={danceDialect}
              variant="outlined"
              label="Dialektus"
              disabled
            />
            <TextField
              sx={{ marginX: 1 }}
              onChange={(e) => setDanceRegion(e.target.value)}
              value={danceRegion}
              variant="outlined"
              label="Régió"
              disabled
            />
          </div>
          <div className="row">
            <TextField
              sx={{ marginX: 1 }}
              onChange={(e) => setDanceArea(e.target.value)}
              value={danceArea}
              variant="outlined"
              label="Tájegység"
            />
            <TextField
              sx={{ marginX: 1 }}
              onChange={(e) => setDanceLand(e.target.value)}
              value={danceLand}
              variant="outlined"
              label="Falu/Település"
            />
          </div>
          <div className="row">
              <Button variant="contained" onClick={() => handleCreateButtonClick()}>
                Létrehozás
              </Button>
          </div>
        </Paper>
      </Box>
    </>
  );
}
