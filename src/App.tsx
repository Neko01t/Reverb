import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from './components/ui/Card'
import  AudioPlayer from './components/layout/__test__/AudioPlayer'
import AppLayout from './components/layout/AppLayout'
function App() {
  const [count, setCount] = useState(0);
  const [songNum, setSongNum] = useState(0);
  return (
    <>
    <AppLayout setsongNum={setSongNum} >
      <Card songNum={songNum} />
    </AppLayout>
    </>
  )
}

export default App
