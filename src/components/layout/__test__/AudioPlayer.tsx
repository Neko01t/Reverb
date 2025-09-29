import React, { useEffect, useState, useRef, RefObject } from 'react';
import {Play,Pause} from 'lucide-react'

type AudioPlayerProps = {
  src: string;
  onPly:(state:boolean)=>void;
  vol:number;
  length:(len:number|void)=>void;
};

const AudioPlayer = ({ src,vol,onPly,length }: AudioPlayerProps) => {
  const audioRef: RefObject<HTMLAudioElement> = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [duration, setDuration] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const currentTrack = MusicList[currentTrackIndex];
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      length(audioRef.current.duration); // duration in seconds
    }
  };
  useEffect(()=>audioRef.current?.pause(),[])
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
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
      <audio ref={audioRef} onLoadedMetadata={handleLoadedMetadata} src={src}></audio>
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
