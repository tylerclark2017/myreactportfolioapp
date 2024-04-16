import React, { useState } from 'react';
import githublogo from '../images/githublogo.png';
import linkedinlogo from '../images/linkedinlogo.png';

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/tyler-clark2017/" target="_blank" rel=" noreferrer">
          <img src={linkedinlogo} alt="LinkedIn" />
        </a>
        <a href="https://github.com/tylerclark2017" target="_blank" rel=" noreferrer">
          <img src={githublogo} alt="GitHub" />
        </a>
      </div>
    </section>
  );
};

export default Contact;