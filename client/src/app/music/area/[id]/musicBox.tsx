"use client";
import { Box, Paper, Typography } from "@mui/material";
import { Music } from "@shared/music";
import Link from "next/link";

interface MusicBoxParameters {
  music: Music;
}

export default function MusicBox({ music }: MusicBoxParameters) {
  return (
    <>
      <Box sx={{ minHeight: "96px", position: "relative" }}>
        <Paper sx={{ padding: "1rem" }} elevation={3}>
          <Typography variant="h6">
            <Link href={`/music/${music.id}`}>{music.title}</Link>
          </Typography>
          <Typography style={{ overflow: "hidden" }} variant="body1">
            {music.lyrics[0] ? music.lyrics[0].text ?? "" : ""}
          </Typography>
        </Paper>
      </Box>
    </>
  );
}
