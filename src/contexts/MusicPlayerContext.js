import React, { useState } from "react";
import Track1 from "../music/track-1.mp3";
import Track2 from "../music/track-2.mp3";
import Track3 from "../music/track-3.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Password Infinity",
      file: Track1,
    },
    {
      name: "The Beat of Nature",
      file: Track2,
    },
    {
      name: "IMM",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
