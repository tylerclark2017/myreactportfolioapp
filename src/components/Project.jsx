import React from 'react';

const Project = ({ project }) => {
  const { title, imageUrl, deployedUrl, githubUrl } = project;

  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <div className="links">
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
};

export default Project;