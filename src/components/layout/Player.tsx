import React,{ useState,useEffect } from 'react';
import AudioPlayer from './__test__/AudioPlayer.tsx'

import { Heart, Play, Mic,Volume2, Captions,Shuffle,Repeat2,StepForward,StepBack } from 'lucide-react'
const Player = () => {
  const [volume, setVolume] = useState(100);
  const [seconds,setSeconds] = useState(0);
  const [isPlaying,setIsPlaying] = useState(true);
  let min = 0;
  function showTime(seconds:number) {
    if (seconds >=60) {
      return min = min+1;
    }
  }
  if (seconds == 100 ) {
    setSeconds(0)
  }
  useEffect(() => {
    let intervalId: number | undefined = undefined;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
    console.log(isPlaying);

    return () => {
      clearInterval(intervalId)
    }
  }, [isPlaying])

  const song1 = '/music/Jason_Derulo_SAVAGE_LOVE_Lyrics_Prod_Jawsh_685_fRrkXJu4OeE.m4a'
  return (
    <div className="fixed bottom-0 w-full h-24 bg-black border-t border-neutral-800 px-4 grid grid-cols-3">
      {/* 1. Current Track Info (Left) */}
      <div className="flex items-center space-x-4">
        <div className="bg-neutral-800 h-14 w-14 rounded-md"></div>
        <div>
          <p className="text-white font-semibold">Song Title</p>
          <p className="text-neutral-400 text-sm">Artist Name</p>
        </div>
        <button><Heart/></button>
      </div>

      {/* 2. Player Controls & Progress (Center) */}
      <div className="flex flex-col items-center justify-center">
        {/* Top: Controls */}
        <div className="flex items-center space-x-6">
          <button className="text-neutral-400 hover:text-white"><Shuffle/></button>
          <button className="text-neutral-400 hover:text-white"><StepBack/></button>
          <button className="bg-gray-600 p-2 hover:bg-gray-300 hover:text-gray-700 text-white rounded-full h-8 w-8 flex items-center justify-center">
            <AudioPlayer src={song1} onPly={setIsPlaying} vol={volume} />
          </button>
          <button className="text-neutral-400 hover:text-white"><StepForward/></button>
          <button className="text-neutral-400 hover:text-white"><Repeat2/></button>
        </div>
        {/* Bottom: Progress Bar */}
        <div className="w-full flex items-center space-x-2 mt-2">
          <span className="text-xs text-neutral-400">{seconds>600?"":0}{min}:{seconds<10?0:""}{seconds}</span>
          <div className="w-full h-1 bg-neutral-600 rounded-full">
            <div className="h-1 bg-white rounded-full" style={{ width: `${seconds}%` }}></div>
          </div>
          <span className="text-xs text-neutral-400">3:30</span>
        </div>
      </div>

      {/* 3. Volume & Other Controls (Right) */}
      <div className="flex items-center justify-end space-x-4">
        <button className="text-neutral-400 hover:text-white"><Mic/></button>
        <button className="text-neutral-400 hover:text-white"><Captions/></button>
        <div className="flex items-center space-x-2 w-32">
          <button className="text-neutral-400 hover:text-white"><Volume2/></button>
          <div className="w-full h-1 bg-neutral-600 rounded-full">
            <div className="h-1 bg-white rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
