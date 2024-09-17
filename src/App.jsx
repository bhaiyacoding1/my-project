import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Contect from './components/Contect';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
          <div className='bg-slate-700 text-white'>
          <Navbar/>
          <Home/>
          <Project/>
          <About/>
          <Contect/>
          <Footer/>
          </div>
    </>
  )
};

export default App;

