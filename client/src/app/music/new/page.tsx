"use client";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Autocomplete,
  IconButton,
  Chip,
  Button,
} from "@mui/material";
import { Area } from "@shared/area";
import axios from "axios";
import { useEffect, useState } from "react";
import { Lyric } from "@shared/lyric";
import { Source } from "@shared/source";
import { Add } from "@mui/icons-material";

export default function NewMusicPage() {
  const [musicTitle, setMusicTitle] = useState<string>("");
  const [availableAreas, setAvailableAreas] = useState<Area[]>();
  const [area, setArea] = useState<Area>();

  const [lyrics, setLyrics] = useState<Lyric[]>([]);
  const [tempLyric, setTempLyric] = useState<string>();

  const [sources, setSources] = useState<Source[]>([]);
  const [tempSource, setTempSource] = useState<string>();

  useEffect(() => {
    async function fetchAreas() {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/area`
      );
      setAvailableAreas(res.data);
    }

    fetchAreas();
  }, []);

  //TODO
  //Description ? (e.g. Agócs Gergely éneke)

  const handleCreateButtonClick = async () => {
    //1. create sources
    const sourceIds: number[] = [];
    console.log(`sourceIds before: ${sourceIds}`);
    for (const s of sources) {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/music-source`,
        {
          link: s.link,
        }
      );

      sourceIds.push(res.data.id);
    }
    console.log(`sourceIds after: ${sourceIds}`);

    //2. create lyrics
    const lyricIds: number[] = [];
    console.log(`lyricIds before: ${lyricIds}`);
    for (const l of lyrics) {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/music-lyrics`,
        {
          text: l.text,
        }
      );
      console.log("lyric id: ", res.data)
      lyricIds.push(res.data.id);
    }
    console.log(`lyricIds after: ${lyricIds}`);

    //3. Save music
    console.log(lyricIds);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/music`,
      {
        title: musicTitle,
        musicSourceIds: sourceIds,
        musicLyricsIds: lyricIds,
        areaId: area!.id,
      }
    );
    console.log(res.data);
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
            Új zene felvétele
          </Typography>
          <TextField //Title
            required
            sx={{ minWidth: "300px" }}
            onChange={(e) => setMusicTitle(e.target.value)}
            value={musicTitle}
            variant="outlined"
            label="Zene címe"
          />

          <Autocomplete //Area
            disablePortal
            options={availableAreas || []}
            getOptionLabel={(option) => option.name}
            value={availableAreas?.find((c) => c.name === area?.name) || null}
            onChange={(e, v) => {
              setArea(v!);
            }}
            sx={{ minWidth: "300px", flex: 1, marginX: 1 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tájegység"
                variant="outlined"
                required
              />
            )}
          />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              multiline
              sx={{ minWidth: "750px" }}
              label="Dalszöveg"
              variant="outlined"
              onChange={(e) => setTempLyric(e.target.value)}
              value={tempLyric}
            />
            <div className="bottom-row">
              <IconButton
                disabled={!tempLyric}
                onClick={() => {
                  setLyrics((prev) => [...prev, { text: tempLyric ?? "" }]);
                  setTempLyric("");
                }}
                sx={{ alignSelf: "end" }}
                size="large"
              >
                <Add />
              </IconButton>

              {lyrics.map((lyric, index) => (
                <Chip
                  title={lyric.text}
                  key={index}
                  onDelete={
                    (l) => {
                      setLyrics((prev) =>
                        prev.filter((p) => p.text !== lyric.text)
                      );
                    } /*TODO Very bad...*/
                  }
                  label={`Szöveg ${index + 1} (${lyric.text.substring(
                    0,
                    5
                  )}...)`}
                ></Chip>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              multiline
              sx={{ minWidth: "750px" }}
              label="Forrás"
              variant="outlined"
              onChange={(e) => setTempSource(e.target.value)}
              value={tempSource}
            />
            <div className="bottom-row">
              <IconButton
                disabled={!tempSource}
                onClick={() => {
                  setSources((prev) => [...prev, { link: tempSource ?? "" }]);
                  setTempSource("");
                }}
                sx={{ alignSelf: "end" }}
                size="large"
              >
                <Add />
              </IconButton>

              {sources.map((source, index) => (
                <Chip
                  title={source.link}
                  key={index}
                  onDelete={
                    (s) => {
                      setSources((prev) =>
                        prev.filter((p) => p.link !== source.link)
                      );
                    } /*TODO Very bad...*/
                  }
                  label={`Forrás ${index + 1} (${source.link.substring(
                    0,
                    15
                  )}...)`}
                ></Chip>
              ))}
            </div>
          </div>

          <Button onClick={handleCreateButtonClick} variant="contained">
            Létrehozás
          </Button>
        </Paper>
      </Box>
    </>
  );
}
