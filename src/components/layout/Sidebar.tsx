import { React } from "react";
import {House,Search,LibraryBig,Plus} from 'lucide-react'
import { MusicList  } from '../../lib/musicData.ts'

const Sidebar = () => {
  return (<>
    <div className="bg-black text-neutral-400 h-full w-64 p-2 flex flex-col">
      {/* Main Navigation */}
      <div className="bg-[#121212] rounded-lg p-2 mb-2">
        <nav className="flex flex-col space-y-4 px-3 py-2">
          <a href="#" className="flex items-center space-x-4 text-white font-bold">
            <span><House/></span>
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-4 hover:text-white font-bold">
            <span><Search/></span>
            <span>Search</span>
          </a>
        </nav>
      </div>

      {/* Library & Playlists */}
      <div className="bg-[#121212] rounded-lg flex-1 flex flex-col">
        <div className="px-5 py-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <span><LibraryBig/></span>
              <span className="font-bold">Your Library</span>
            </div>
            <button className="hover:bg-neutral-800 p-1 rounded-full"><Plus/></button>
          </div>
        </div>

        {/* Scrollable Playlist Area */}
        <div className="overflow-y-auto px-3 pb-4">
          {/* Example Playlist Item */}

        {MusicList.map((item, index) => (
        <div
            key={index}
            className="flex items-center space-x-4 p-2 rounded-md hover:bg-neutral-800 cursor-pointer"
          >
            <div className="bg-neutral-800 h-12 w-12 rounded-md">
            <img src={item.png} alt={item.title} />
          </div>
          <div>
            <p className="text-white">{item.title}</p>
            <p className="text-sm">Playlist • User</p>
          </div>
        </div>
        ))}
        </div>
      </div>
    </div>
  </>)
}

export default Sidebar;
