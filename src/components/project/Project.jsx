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
  function getProjectList() {
    fetch('/projects', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }
  useEffect(() => {
    getProjectList();
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
