import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux/state';
import './ProjectContainer.scss';
import Project from './Project';
import HeadPortrait from '../headPortrait/HeadPortrait';

const ProjectContainer = () => {
  const { isBlackTheme } = useSelector((state: State) => {
    return {
      isBlackTheme: state.isBlackTheme
    };
  });
  console.log(333, isBlackTheme);
  return (
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
  );
};
export default ProjectContainer;
