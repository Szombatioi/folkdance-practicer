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
      <Box sx={{ height: "156px", position: "relative" }}>
        <Paper
          sx={{
            padding: "1rem",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
          elevation={3}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            <Typography variant="h6">
              <Link href={`/music/${music.id}`}>{music.title}</Link>
            </Typography>
            {music.lyrics.length > 1 && (
              <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
                {music.lyrics.length} dalszöveg
              </Typography>
            )}
          </div>
          <Typography
            style={{ overflow: "hidden", whiteSpace: "pre-line" }}
            variant="body1"
          >
            {music.lyrics[0]
              ? music.lyrics[0].text ?? "(nincs még dalszöveg)"
              : "(nincs még dalszöveg)"}
          </Typography>
        </Paper>
      </Box>
    </>
  );
}
