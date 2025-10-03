
import React, { createContext, useState, useContext, ReactNode } from "react";
import { MusicList } from "../../lib/musicData";

type MusicContextType = {
  currentTrackIndex: number;
  setCurrentTrackIndex: (i: number) => void;
  isPlaying: boolean;
  setIsPlaying: (b: boolean) => void;
  currentTrack: typeof MusicList[number];
};

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = MusicList[currentTrackIndex];

  return (
    <MusicContext.Provider value={{ currentTrackIndex, setCurrentTrackIndex, isPlaying, setIsPlaying, currentTrack }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used inside MusicProvider");
  return ctx;
};
