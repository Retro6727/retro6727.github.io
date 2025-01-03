import React from 'react';
import './styles/experience.css';

const Experience = () => {
  return (
    <section className="experience">
      <h2>EXPERIENCE</h2>
      
      <div className="experience-item">
        <h3>NullClass Private Limited</h3>
        <h4><em>Data Science Intern</em></h4>
        <p>
          <strong>Description:</strong> Implemented a Language Translation Model using Machine Learning techniques.
        </p>
      </div>
      
      <div className="experience-item">
        <h3>SmartKnower</h3>
        <h4><em>Artificial Intelligence Intern</em></h4>
        <p>
          <strong>Description:</strong> Worked on AI tools and learned the concepts of ML and Deep Learning.
        </p>
      </div>
    </section>
  );
};

export default Experience;
