import React, { useContext, useEffect } from 'react';
import NavigationButton from '../navigationButton/NavigationButton';
import ProjectItem from '../project/ProjectItem';
import { projectContainerContext } from '../project/ProjectContainer';
import './Project.scss';

const Project = () => {
  const { projectInfo, onChange } = useContext(projectContainerContext);

  function updateProjectInfo() {
    return { newProjectId: '4343' };
  }

  console.log(3333, projectInfo);
  useEffect(() => {
    onChange(updateProjectInfo);
  }, []);
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
