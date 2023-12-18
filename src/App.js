import React from 'react'
import { Routes, Route } from 'react-router'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'

function App() {
  return (

    <div className='App'>
      <div className='container_fl'>
        <Navbar />
        <div className='mt-3 pb-5'>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;