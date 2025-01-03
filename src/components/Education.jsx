import React from 'react';
import './styles/education.css';
import 'animate.css';

const Education = () => {
  return (
    <section className="education">
      <h1>EDUCATION</h1>

      <div className="education-item">
        <h3>
          University of Sussex 
          <span className="location">— Brighton, United Kingdom</span>
        </h3>
        <em>MS Advanced Computer Science</em>
      </div>

      <div className="education-item">
        <h3>
          Amity University 
          <span className="location">— Panvel, Maharashtra</span>
        </h3>
        <em>B.Tech Computer Science & Technology and 3D Animation (Minor)</em>
      </div>
    </section>
  );
};

export default Education;
