import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import About from '../About/About'
import BookCall from '../BookCall/BookCall'
import Calendar from '../Calendar/Calendar'
import Contact from '../Contact/Contact'
import Work from '../Work/Work'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Main/>
    <Work/>
    <BookCall/>
    <Calendar/>
    <About/>
    <Contact/>
    <Footer/>


    </>
  )
}

export default Home