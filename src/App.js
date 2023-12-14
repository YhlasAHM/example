import React from 'react'
import { Routes, Route } from 'react-router'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'

import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
/* 
const Model = (props) => {
  const { scene } = useGLTF("/bmw.glb")
  return <primitive object={scene} {...props} />
}
 */

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