import React ,{ useState } from 'react';
import { motion } from 'framer-motion';
import { MusicList } from '../../lib/musicData.ts'

interface cardProps {
  songNum? : number  ;
}

function Card({songNum}: cardProps) {

  const currentTrack = MusicList[songNum];
  return (
    <>
      <motion.div
      initial={{ x:20, opacity: 0, }}
      animate={{ x:0 , opacity: 1, }}

      className=" w-auto absolute top-[20%] left-[50%] h-auto bg-[#121212] text-white p-4 rounded-xl hover:bg-[#151515]"
      >
      <motion.div
      initial={{x:20}}
      animate={{x:0}}
      className='text-center ' > {currentTrack.title} </motion.div>
      <img src={currentTrack.png} height={200} width={200} />
      </motion.div>
    </>
  )
}
export default Card;

