import React from 'react';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';


function App() {
  return (
    <>
      <Navbar />
       <Home />
      <Footer />
    </>
  );
}

export default App;