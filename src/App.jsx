import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Components/Home'
import Discover from './Components/Discover'

function App() {
  return (
    <>
      <nav className='bg-black text-white '>
        <ul className='flex justify-end gap-5 px-10 py-4'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/discover">Discover</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </>
  )
}

export default App
