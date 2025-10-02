import React , { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Player from './Player';
import { MusicList } from '../../lib/musicData'
// The layout takes the main page content as a 'children' prop
interface AppLayoutProps  {
  setsongNum: (song : number) => void;
  children: React.ReactNode;
};

const AppLayout = ({setsongNum, children }: AppLayoutProps) => {
  const [song , setSong ] = useState(0)
  useEffect(()=>{
    setsongNum(song)
  },[song])
  return (
    <div className="relative h-screen w-screen bg-black">
      <div className="flex flex-wrap h-[calc(100%-6rem)] ">

        {/* 1. Sidebar */}
        <aside className="hidden w-64 md:block">
          <Sidebar />
        </aside>

        {/* 2. Main Page Content */}
        <main className="overflow-y-auto">
          {children}
        </main>
      </div>

      {/* 3. Player Bar */}
      <footer className="absolute bottom-0 h-24 w-full">
        <Player setSong={setSong} />
      </footer>
    </div>
  );
};

export default AppLayout;
