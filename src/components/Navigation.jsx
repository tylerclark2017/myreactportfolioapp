import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    // Function to handle navigation clicks
    const handleNavigationClick = (section) => {
      // Handle navigation click logic here
      console.log(`Navigating to ${section}`);
    };
  
    return (
      <nav>
        <ul>
          <Link to='/'>About</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/resume'>Resume</Link>

          { /* 
          <li><button onClick={() => handleNavigationClick("About Me")}>About Me</button></li>
          <li><button onClick={() => handleNavigationClick("Portfolio")}>Portfolio</button></li>
          <li><button onClick={() => handleNavigationClick("Contact")}>Contact</button></li>
          <li><button onClick={() => handleNavigationClick("Resume")}>Resume</button></li>
          */}
        </ul>
      </nav>
    );
  };
  
  export default Navigation;