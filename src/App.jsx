import React from 'react'
import Home from './pages/Home/Home'
import Player from './pages/Player/Player'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/player' element={<Player/>}/>
      </Routes>
    </div>
  )
}

export default App