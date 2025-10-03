import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from './components/ui/Card'
import  AudioPlayer from './components/layout/__test__/AudioPlayer'
import AppLayout from './components/layout/AppLayout'
import { MusicProvider } from "./context/MusicContext";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <MusicProvider>
    <AppLayout >
      <Card />
    </AppLayout>
    </MusicProvider>
    </>
  )
}

export default App
