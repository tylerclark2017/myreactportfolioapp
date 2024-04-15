import React from 'react';
import Headshot from './images/ProfessionalHeadshot.jpg';

const AboutMe = () => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <div className="bio">
        <img src= { Headshot } alt="Tyler's Professional Headshot" />
        <p>I am a recent graduate of edX and George Washington University's Full Stack Coding Bootcamp.
            In this bootcamp, we learned numerous languages and concepts that are the building blocks of front and back end 
            web development. These langugages include 
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

