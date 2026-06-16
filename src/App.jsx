import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import { useLocation } from 'react-router-dom'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <Hero />
    </div>
  )
}

export default App