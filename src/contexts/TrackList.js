import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { Box } from "@mui/system";
import HeadsetIcon from "@mui/icons-material/Headset";

const TrackList = () => {
  const {
    trackList,
    currentTrackName,
    playTrack,
    isPlaying,
    currentTrackIndex,
  } = useMusicPlayer();

  return (
    <Stack spacing={2}>
      <Box sx={{ margin: "auto" }}>
        {currentTrackName ? (
          <Typography variant="h6" fontWeight="bold" fontStyle="italic">
            {currentTrackName}
          </Typography>
        ) : (
          <Typography variant="h6" fontWeight="light" fontStyle="italic">
            Let's choose a song
          </Typography>
        )}
      </Box>

      {trackList.map((track, index) => (
        // ( Surprise us with your code here)
        <Box
          key={track.name}
          display="flex"
          alignItems="center"
          sx={{
            bgcolor: "#FBD1D3",
            border: "2px double #9F81CD",
            borderRadius: "10px",
            boxShadow: "1px 0.6px 0.2px 1px #FBD1D3",
            p: 0.5,
          }}
        >
          {isPlaying && currentTrackIndex === index ? (
            <Button type="button" onClick={() => playTrack(index)}>
              <HeadsetIcon sx={{ color: "red" }} />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => {
                playTrack(index);
              }}
            >
              <PlayCircleFilledWhiteIcon sx={{ color: "#766DC1" }} />
            </Button>
          )}

          <Typography
            variant="h10"
            sx={{
              mr: 3,
              color: "#9F81CD",
              fontWeight: "bold",
              textShadow: "0px 0.1px black",
            }}
          >
            {track.name}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default TrackList;
