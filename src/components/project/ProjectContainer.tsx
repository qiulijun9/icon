import React, { useState, createContext, Context } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux/state';
import './ProjectContainer.scss';
import Project from './Project';
import HeadPortrait from '../headPortrait/HeadPortrait';

export const projectContainerContext: Context<any> = createContext({});

const ProjectContainer = () => {
  const { isBlackTheme } = useSelector((state: State) => {
    return {
      isBlackTheme: state.isBlackTheme
    };
  });
  const defaultProjectInfo = { projectId: '111', projectName: 'test' };
  const [projectInfo, setProjectInfo] = useState(defaultProjectInfo);
  return (
    <projectContainerContext.Provider
      value={{ projectInfo: projectInfo, onChange: () => {} }}
    >
      <div
        className="projectContainer-wrapper"
        style={{ background: isBlackTheme ? '#000' : '#fff`' }}
      >
        <div className="projectContainer-menu">
          <HeadPortrait />
        </div>
        <div className="projectContainer-list">
          <Project />
        </div>
      </div>
    </projectContainerContext.Provider>
  );
};
export default ProjectContainer;
