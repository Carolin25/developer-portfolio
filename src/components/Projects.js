import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects') // Simulate an API call
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []); // Empty array means it runs once when the component mounts

  return (
    <section>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
