import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Home from './pages/home/Home'
import Signup from './pages/auth/Signup'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Signup />}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
    </>
  )
}

export default App