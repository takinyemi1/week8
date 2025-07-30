import { useState } from 'react'
import './App.css'
import CreateCrewmate from './pages/CreateCrewmate'
import Router from './Routes/Router'
import { Route, Routes } from 'react-router-dom'
import CrewmateGallery from './pages/CrewmateGallery'
import EditCrewmate from './pages/EditCrewmate';
import DetailCrewmate from './pages/DetailCrewmate'

function Home() {
  return (
    <>
      <div>
        <h1>Welcome to the CrewMate Creator!</h1>
        <br />
        <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
        {/* <br /> */}
        <img src='./src/assets/among-us-full.png' alt='Among Us Crewmates' className='crewmates-img' />
        <br /><br />
        <img src='./src/assets/spaceship.png' alt='Among Us Spaceship' className='spaceship-img' />
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <div>
        <Router />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-crewmate' element={<CreateCrewmate />} />
          <Route path='/gallery' element={<CrewmateGallery />} />
          <Route path='/edit-crewmate/:id' element={<EditCrewmate />} />
          <Route path='/crewmate-details/:id' element={<DetailCrewmate />} />
        </Routes>
      </div>
    </>
  )
}

export default App
