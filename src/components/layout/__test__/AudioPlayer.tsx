import React, { useEffect, useState, useRef, RefObject } from 'react';
import {Play,Pause} from 'lucide-react'

type AudioPlayerProps = {
  src: string;
  onPly:(state:boolean)=>void;
  vol:number;
};

const AudioPlayer = ({ src,vol,onPly }: AudioPlayerProps) => {
  const audioRef: RefObject<HTMLAudioElement> = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [vol]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      onPly(false)
    } else {
      onPly(true)
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div >
      <audio ref={audioRef} src={src}></audio>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className={`hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full ${isPlaying ? "bg-green-600" :"bg-green-700" } `}
      >
        {isPlaying ? <Pause/> : <Play/>}
      </button>
    </div>
  );
};

export default AudioPlayer;
