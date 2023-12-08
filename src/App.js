import React, { useEffect, useState } from 'react'
import './App.css';

import 'antd/dist/antd.css';
import 'antd/dist/antd.js';
import 'antd/dist/antd.min.css'

import 'antd/dist/antd.variable.min.css';

import { Routes, Route } from "react-router-dom";

import { lazy } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';



const Navbar = lazy(() => import('./Components/Navbar/Navbar'))

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'))


function App() {

  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {

    window.onscroll = () => {
      if (window.scrollY > 400) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    }
  }, [])


  const back_Top = () => {
    window.scrollTo({
      top: '0',
      behavior: 'smooth'
    })
  }

  return (
    <div className='App'>
      <div className='container_fl'>
        <Navbar />
        <div className='mt-3 pb-5'>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
        {
          showBtn && <div className='back_top' onClick={back_Top}><ArrowCircleUpIcon /> </div>
        }
      </div>
    </div>
  )
}

export default App;