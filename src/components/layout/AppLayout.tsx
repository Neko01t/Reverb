import React from 'react';
import Sidebar from './Sidebar';
import Player from './Player';

// The layout takes the main page content as a 'children' prop
type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="relative h-screen w-screen bg-black">
      <div className="grid h-[calc(100%-6rem)] grid-cols-[auto,1fr]">

        {/* 1. Sidebar */}
        <aside className="hidden md:block">
          <Sidebar />
        </aside>

        {/* 2. Main Page Content */}
        <main className="overflow-y-auto">
          {children}
        </main>
      </div>

      {/* 3. Player Bar */}
      <footer className="absolute bottom-0 h-24 w-full">
        <Player />
      </footer>
    </div>
  );
};

export default AppLayout;
