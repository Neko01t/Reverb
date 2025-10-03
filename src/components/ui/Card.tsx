import React , {useState} from "react";
import { motion } from "framer-motion";
import { useMusic } from "../../context/MusicContext";

function Card() {
  const { currentTrack, isPlaying } = useMusic();
  const { radii, setRadii } = useState()
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-[20%] left-1/2 -translate-x-1/2 bg-[#121212] text-white p-6 rounded-2xl shadow-lg w-[280px] flex flex-col items-center space-y-4 hover:bg-[#181818]"
    >
      <div className="text-center">
        <p className="text-lg font-bold">{currentTrack.title}</p>
        <p className="text-sm text-neutral-400">{currentTrack.artist}</p>
      </div>

      <motion.div
        className="w-48 h-48 rounded-full border-4 border-neutral-700 overflow-hidden shadow-md"
        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
        transition={
          isPlaying
            ? { repeat: Infinity, ease: "linear", duration: 8 }
            : { duration: 0.5 }
        }
      >
        <img
          src={currentTrack.png}
          alt={currentTrack.title}
          className="object-cover w-full h-full rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}

export default Card;

