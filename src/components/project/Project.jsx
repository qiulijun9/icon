import React from 'react';
import NavigationButton from '../navigationButton/NavigationButton';
import ProjectItem from '../project/ProjectItem';

import './Project.scss';

const Project = () => {
  return (
    <div className="project-wrapper">
      <div className="project-header">
        <NavigationButton />
      </div>
      <div className="project-list">
        <ProjectItem />
      </div>
    </div>
  );
};
export default Project;
