import React,{ useState,useEffect, useRef } from 'react';
import { MusicList } from '../../lib/musicData.ts'
import { Heart, Play, Mic,Volume2, Captions,Shuffle,Repeat2,StepForward,StepBack, Pause } from 'lucide-react'

const Player = () => {
  const [seconds,setSeconds] = useState(0);
  const [isPlaying,setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  // State for audio progress
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(0.75); // Volume is 0 to 1
  const currentTrack = MusicList[currentTrackIndex];
  const audioRef = useRef<HTMLAudioElement>(null);

  //play or pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]); // Reruns when song changes or play/pause state changes

  // Vol
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Handles
    const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTrackEnded = () => {
    handleNext();
  };

  //control
    const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % MusicList.length;
    setCurrentTrackIndex(nextIndex);
    setProgress(0); // Reset progress for the new song
  };

  const handlePrev = () => {
    const prevIndex = (currentTrackIndex - 1 + MusicList.length) % MusicList.length;
    setCurrentTrackIndex(prevIndex);
    setProgress(0); // Reset progress for the new song
  };

  // time format
    const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const progressPercentage = duration > 0 ? (progress / duration) * 100 : 0;

  let min = 0;
  useEffect(() => {
    let intervalId: number | undefined = undefined;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
    console.log(MusicList);
    return () => {
      clearInterval(intervalId)
    }
  }, [isPlaying])

  const song1 = '/music/Jason_Derulo_SAVAGE_LOVE_Lyrics_Prod_Jawsh_685_fRrkXJu4OeE.m4a'
  return (
    <div className="fixed bottom-0 w-full h-24 bg-black border-t border-neutral-800 px-4 grid grid-cols-3">
        <audio
          ref={audioRef}
          src={currentTrack.song}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleTrackEnded}
        />

      {/* 1. Current Track Info (Left) */}
      <div className="flex items-center space-x-4">
        <div className="bg-neutral-800 h-14 w-14 rounded-md">
          <img src={currentTrack.png} alt={currentTrack.title} className="object-cover h-full w-full rounded-md"/>
        </div>
        <div>
          <p className="text-white font-semibold">{currentTrack.title}</p>
          <p className="text-neutral-400 text-sm">{currentTrack.artist}</p>
        </div>
        <button> <Heart /></button>
      </div>

      {/* 2. Player Controls & Progress (Center) */}
      <div className="flex flex-col items-center justify-center">
        {/* Top: Controls */}
        <div className="flex items-center space-x-6">
          <button className="text-neutral-400 hover:text-white"><Shuffle/></button>
          <button onClick={handlePrev} className="text-neutral-400 hover:text-white"><StepBack/></button>
          <button onClick={handlePlayPause} className="bg-gray-600 p-2 hover:bg-gray-300 hover:text-gray-700 text-white rounded-full h-8 w-8 flex items-center justify-center">
              {isPlaying ? <Pause size={20}/> : <Play size={20}/>}
          </button>
          <button onClick={handleNext} className="text-neutral-400 hover:text-white"><StepForward/></button>
          <button className="text-neutral-400 hover:text-white"><Repeat2/></button>
        </div>
        {/* Bottom: Progress Bar */}
        <div className="w-full flex items-center space-x-2 mt-2">
          <span className="text-xs text-neutral-400">{formatTime(progress)}</span>
          <div className="w-full h-1 bg-neutral-600 rounded-full">
            <div className="h-1 bg-white rounded-full" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <span className="text-xs text-neutral-400">{formatTime(duration)}</span>
        </div>
      </div>

      {/* 3. Volume & Other Controls (Right) */}
      <div className="flex items-center justify-end space-x-4">
        <button className="text-neutral-400 hover:text-white"><Mic/></button>
        <button className="text-neutral-400 hover:text-white"><Captions/></button>
        <div className="flex items-center space-x-2 w-32">
          <button className="text-neutral-400 hover:text-white"><Volume2/></button>
          <div className="w-full h-1 bg-neutral-600 rounded-full">
          <div className="h-1 bg-white rounded-full" style={{ width: `${volume*100}%` }}></div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-full h-1 bg-neutral-600 rounded-full appearance-none cursor-pointer"
           />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
