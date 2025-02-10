import './App.css';
import React from 'react';
import Home from './Pages/Home/Homescreen';
import Projects from './Pages/Home/Projects';
import Footer from './Pages/Home/Footer';

function App() {
  return <div className='App'>
    <Home/>
    <Projects/>
    <Footer/>
  </div>
}

export default App;
