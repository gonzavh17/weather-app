import React from 'react'
import Footer from './Components/Footer.jsx'
import Form from './Components/Form.jsx'
import NavBar from './Components/NavBar.jsx'
import WeatherPanel from './Components/WeatherPanel.jsx'
import './Assets/Css/WeatherPanel.css'

function App() {
  return (
    <div className='app-container'>
      <NavBar/>
      <WeatherPanel/>
      <Footer/>
    </div>
  )
}

export default App
