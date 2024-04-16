import React from 'react';
import Project from './Project'; // Importing the Project component
import passwordGenerator from '../images/passwordgenerator.png';
import weatherDashboard from '../images/weatherdashboard.png';
import readmeGenerator from '../images/readmegenerator.png';
import socialNetworkAPI from '../images/socialnetworkapi.png';
import ecommercebackend from '../images/ecommercebackend.png';

// Creating the Portfolio component

const Portfolio = () => {
    // Sample data for projects
    const projects = [
        {
            title: "JavaScript Random Password Generator",
            imageUrl: passwordGenerator,
            deployedUrl: "https://tylerclark2017.github.io/random-password-generator/",
            githubUrl: "https://github.com/tylerclark2017/random-password-generator"
        },
        {
            title: "Weather Dashboard",
            imageUrl: weatherDashboard,
            deployedUrl: "https://tylerclark2017.github.io/weather-dashboard/",
            githubUrl: "https://github.com/tylerclark2017/weather-dashboard"
        },
        {
            title: "README Generator",
            imageUrl: readmeGenerator,
            deployedUrl: "https://drive.google.com/file/d/1a5KtP9qbQnHLNDNzloFOx-e8I1Tst82I/view",
            githubUrl: "https://github.com/tylerclark2017/readmegenerator"
        },
        {
            title: "CRUDit Group Project",
            imageUrl: "https://github.com/yaserhdev/crudit/blob/main/public/images/crudit-screenshot.png?raw=true",
            deployedUrl: "https://infinite-brushlands-89514-07257eec72fc.herokuapp.com/",
            githubUrl: "https://github.com/yaserhdev/crudit"
        },
        {
            title: "API for a Social Network",
            imageUrl: socialNetworkAPI,
            deployedUrl: "https://www.loom.com/share/f880c844e3ca4dc38ba791cdbeb11b9b?sid=4c71d2fe-2e53-456a-9de3-06b11444825b",
            githubUrl: "https://github.com/tylerclark2017/socialnetworkapi"
        },
        {
            title: "E-Commerce Back End",
            imageUrl: ecommercebackend,
            deployedUrl: "https://www.loom.com/share/0959e512a6ea403a8083e6854d160711",
            githubUrl: "https://github.com/tylerclark2017/ecommercebackend"
        }
    ];

    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;