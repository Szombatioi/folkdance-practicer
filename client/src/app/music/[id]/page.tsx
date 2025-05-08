"use client";
//Itt egy db zene lesz

import LoadingSpinner from "@/app/components/loadingSpinner";
import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Link,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import { Lyric } from "@shared/lyric";
import { Music } from "@shared/music";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

//Cím
//(tájegység)
//Források

//Szöveg            szerkesztés+törlés gomb

//Lapozó a szövegekhez

export default function ViewMusicPage() {
  const params = useParams();
  const router = useRouter();
  const [music, setMusic] = useState<Music>();
  const [selectedLyric, setSelectedLyric] = useState<number>(1);

  useEffect(() => {
    async function fetchMusic() {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/music/${params.id}`
      );
      if (res.status < 300 && res.status >= 200) setMusic(res.data);
    }

    fetchMusic();
  }, []);

  return (
    <>
      {music ? (
        <Box>
          <Paper sx={{ padding: "1rem" }} elevation={3}>
            <IconButton onClick={() => router.back()}>
              <ArrowBack />
            </IconButton>
            <Typography variant="h3" align="center">
              {music.title}
            </Typography>
            <Typography variant="h6" align="center">
              ({music.area.name})
            </Typography>

            {music.musicSources.length > 0 && (
              <>
                <Typography variant="h5">Források: </Typography>
                {music.musicSources.map((ms, index) => (
                  <Link key={index} href={ms.link}>
                    {ms.link}
                  </Link>
                ))}
              </>
            )}

            {music.lyrics.length > 0 && (
              <div>
                <div
                  style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "45%",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ whiteSpace: "pre-line" }}>
                    {music?.lyrics[selectedLyric - 1]?.text ?? "Error"}
                  </Typography>
                </div>
                {music.lyrics.length > 1 && (
                  <Pagination
                    page={selectedLyric}
                    onChange={(e, v) => {
                      setSelectedLyric(v);
                    }}
                    sx={{ display: "flex", justifyContent: "center" }}
                    count={music.lyrics.length}
                  ></Pagination>
                )}
              </div>
            )}
          </Paper>
        </Box>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}
