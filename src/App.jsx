import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css'; // Import your CSS file if you have one

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;