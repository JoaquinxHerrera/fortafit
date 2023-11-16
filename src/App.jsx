import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./AppStyles.css"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import Calculator from "./components/Calculator/Calculator"
import Routine from "./components/Routine/Routine"
import FilterComponent from "./components/Schedule/FilterCalendar"
import Trainer from "./components/Trainer/Trainer"
import Contact from "./components/Contact/Contact"
import Login from "./components/login/Login"


function App() {


  return (
    <BrowserRouter>
      <NavBar/>
      <Routes className="content">
        <Route path="/" element={<Hero/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/routine' element={<Routine/>}/>
        <Route path='/schedule' element={<FilterComponent/>}/>
        <Route path='/trainer' element={<Trainer/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
