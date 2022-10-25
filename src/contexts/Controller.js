import { Box } from "@mui/system";
import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Button } from "@mui/material";

function Controller() {
  const {
    togglePlay,
    isPlaying,
    playPreviousTrack,
    playNextTrack,
    currentTrackName,
  } = useMusicPlayer();

  return (
    <Box display="flex" sx={{ mt: 2, pr: 3, pl: 3, height: "40px" }}>
      <Button onClick={playPreviousTrack}>
        <SkipPreviousIcon sx={{ color: "#766DC1" }} />
      </Button>

      {isPlaying && currentTrackName ? (
        <Button onClick={togglePlay}>
          <PauseCircleIcon sx={{ color: "#766DC1" }} />
        </Button>
      ) : (
        <Button onClick={togglePlay}>
          <PlayCircleFilledWhiteIcon
            sx={{ color: "#766DC1", fontSize: "40px" }}
          />
        </Button>
      )}

      <Button onClick={playNextTrack}>
        <SkipNextIcon sx={{ color: "#766DC1" }} />
      </Button>
    </Box>
  );
}

export default Controller;
