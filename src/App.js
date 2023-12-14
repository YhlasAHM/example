import React, { useRef, useState } from 'react'
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

import { useFrame } from '@react-three/fiber'

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}


const EarthCanvas = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

function App() {
  const earth = useGLTF('/bmw.gltf');

  <primitive object={earth.scene} scale={2.5} />

  return (

    <div className='App'>
      <div className='container_fl'>
        <Navbar />
        <div className='mt-3 pb-5'>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
        <div className="flex justify-center items-center h-screen w-screen">
          <EarthCanvas />
        </div>
      </div>
    </div>
  )
}

export default App;