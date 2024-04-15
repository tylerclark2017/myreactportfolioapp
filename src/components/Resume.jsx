import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>Download my resume <a href="path_to_resume" download>here</a>.</p>
      <h3>Proficiencies</h3>
      <ul>
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        <li>Proficiency 3</li>
        {/* Add more proficiencies here */}
      </ul>
    </section>
  );
};

export default Resume;