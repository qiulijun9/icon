import React from 'react';
import './ProjectContainer.scss';
import Project from './Project';
import HeadPortrait from '../headPortrait/HeadPortrait';

const ProjectContainer = () => {
  return (
    <div className="projectContainer-wrapper">
      <div className="projectContainer-menu">
        <HeadPortrait />
      </div>
      <div className="projectContainer-list">
        <Project />
      </div>
    </div>
  );
};
export default ProjectContainer;
