import React from 'react';
import Headshot from './images/ProfessionalHeadshot.jpg';

const AboutMe = () => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <div className="bio">
        <img src={Headshot} alt="Tyler's Professional Headshot" />
        <p>I am a recent graduate of edX and George Washington University's Full Stack Coding Bootcamp.
          In this bootcamp, we learned numerous languages and concepts that are the building blocks of front and back end
          web development. Some of the highlights include front end frameworks such as HTML & CSS & JavaScript, as well as React JS,
          and back end frameworks such as Server-Side and Client-Side APIs, Node, Express, MVC, MongoDB, SQL, and NoSQL databases.
        </p>
        <p>
          I am currently looking for a front end developer role but am open to full stack or back end developer roles. Please use the
          Contact link to reach out to me or the Resume link to view my current proficiencies. I look forward to working in the
          software developer community!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

