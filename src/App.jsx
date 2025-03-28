import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './Components/Home'
import Discover from './Components/Discover'

function App() {
  return (
    <>
      <nav className='bg-black text-white w-svw fixed z-10'>
        <ul className='flex justify-end gap-5 px-10 py-4'>
          <li>
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "orange" : "white" })}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/discover" style={({ isActive }) => ({ color: isActive ? "orange" : "white" })}>Discover</NavLink>
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
