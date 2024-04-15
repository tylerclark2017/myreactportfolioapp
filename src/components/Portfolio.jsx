import React from 'react';
import Project from './Project'; // Importing the Project component

const Portfolio = () => {
    // Sample data for projects
    const projects = [
        {
            title: "Project 1",
            imageUrl: "path_to_image_1",
            deployedUrl: "url_to_deployed_project_1",
            githubUrl: "url_to_github_repo_1"
        },
        {
            title: "Project 2",
            imageUrl: "path_to_image_2",
            deployedUrl: "url_to_deployed_project_2",
            githubUrl: "url_to_github_repo_2"
        },
        {
            title: "Project 3",
            imageUrl: "path_to_image_3",
            deployedUrl: "url_to_deployed_project_3",
            githubUrl: "url_to_github_repo_3"
        },
        {
            title: "Project 4",
            imageUrl: "path_to_image_4",
            deployedUrl: "url_to_deployed_project_4",
            githubUrl: "url_to_github_repo_4"
        },
        {
            title: "Project 5",
            imageUrl: "path_to_image_5",
            deployedUrl: "url_to_deployed_project_5",
            githubUrl: "url_to_github_repo_5"
        },
        {
            title: "Project 6",
            imageUrl: "path_to_image_6",
            deployedUrl: "url_to_deployed_project_6",
            githubUrl: "url_to_github_repo_6"
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