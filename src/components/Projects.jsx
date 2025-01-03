import React, { useState, useEffect } from 'react';
import './styles/project.css';
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Replace with your GitHub username
  const githubUsername = 'retro6727';

  useEffect(() => {
    // Fetch GitHub repositories
    const fetchProjects = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchProjects();
  }, [githubUsername]);

  return (
    <div className="projectcontainer">
      <h1>GitHub Projects</h1>
      {projects.length === 0 ? (
        <p>Loading projects...</p> // Show loading state if no projects are fetched yet
      ) : (
        projects.map((project) => (
          <CCard className="mb-3" key={project.id}>
            {project.owner && project.owner.avatar_url && (
              <CCardImage orientation="top" src={project.owner.avatar_url} />
            )}
            <CCardBody>
              <CCardTitle>{project.name}</CCardTitle>
              <CCardText>{project.description || 'No description provided'}</CCardText>
              <CCardText>
                <small className="text-body-secondary">Last updated: {new Date(project.updated_at).toLocaleDateString()}</small>
              </CCardText>
            </CCardBody>
            <CCardBody>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
            </CCardBody>
          </CCard>
        ))
      )}
    </div>
  );
};

export default Projects;
