import React from 'react';
import Project from './Project'; // Importing the Project component

const Portfolio = () => {
    // Sample data for projects
    const projects = [
        {
            title: "JavaScript Random Password Generator",
            imageUrl: "https://powerbox-na-file.trend.org/SFDC/DownloadFile_iv.php?jsonInfo=%7B%22Query%22%3A%2200I70Ai2nyFDAwS%2BP25uK6Ghsg4UT0HsOfPQdoUakoF2j95gijWh8u%2B%2Buufi3p2Cmn8DJpIBOFSDMYa5tPQEVPgioCGqdwUkNMADX9XB8j6loImcNm%2BFtr4V5A1oBmgFkX%2FRc67xw5VO9xSD%2Bn8xXbWUw4rGdz3Nx4NuxrIYzFyMQKyYxW%2FXmbc0NuhyxDEB6Zg7%2Fk4sEyxzc6Dvs5VU3DV6n2ele4n3JxDASELK2lnDr8iAO5oBXMN7aJ5s0V49%22%2C%22iv%22%3A%2298f757e1c6e823bde8298e60ff2f1067%22%7D",
            deployedUrl: "https://tylerclark2017.github.io/random-password-generator/",
            githubUrl: "https://github.com/tylerclark2017/random-password-generator"
        },
        {
            title: "Weather Dashboard",
            imageUrl: "https://miro.medium.com/v2/resize:fit:6508/1*vjwOGJmWO1qawT0lq-y3_A.png",
            deployedUrl: "https://tylerclark2017.github.io/weather-dashboard/",
            githubUrl: "https://github.com/tylerclark2017/weather-dashboard"
        },
        {
            title: "README Generator",
            imageUrl: "https://devblogs.microsoft.com/nuget/wp-content/uploads/sites/49/2023/02/MySqlConnector.png",
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
            imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*7yAihbfGrMCzjUzIF2UitA.jpeg",
            deployedUrl: "https://www.loom.com/share/f880c844e3ca4dc38ba791cdbeb11b9b?sid=4c71d2fe-2e53-456a-9de3-06b11444825b",
            githubUrl: "https://github.com/tylerclark2017/socialnetworkapi"
        },
        {
            title: "E-Commerce Back End",
            imageUrl: "https://www.interviewbit.com/blog/wp-content/uploads/2021/06/Servers-1024x640.jpg",
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