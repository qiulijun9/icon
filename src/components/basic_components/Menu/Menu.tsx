import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../../redux/state';
import './Menu.scss';

export interface Props {
  data: Array<Navigation>;
  expanded?: boolean; //是否展开,
  activeMenu: Function;
}
export interface MenuType {
  projectId: string;
  projectName: string;
}
export interface Navigation {
  type: 'Team' | 'Personal';
  primaryNavigation: string;
  secondaryNavigation: Array<MenuType>;
  [key: string]: any;
}

const Menu = (props: Props) => {
  const routerHistory = useHistory();
  const { data, expanded = true, activeMenu } = props;
  const [showTeamMenu, setShowTeamMenu] = useState(expanded);
  const [showPersonalMenu, setShowPersonalMenu] = useState(expanded);

  function handleDisplayMenuList(type: string) {
    if (type === 'Team') setShowTeamMenu(!showTeamMenu);
    if (type === 'Personal') setShowPersonalMenu(!showPersonalMenu);
  }

  // const { currentProject } = useSelector((state: State) => {
  //   return {
  //     currentProject: state.currentProject
  //   };
  // });
  const dispatch = useDispatch();
  const setCurrentProjectInfo = useCallback(
    projectInfo => {
      dispatch({
        type: 'CURRENT_PROJECT',
        data: projectInfo
      });
    },
    [dispatch]
  );

  function handleShowProject(projectInfo: Object) {
    setCurrentProjectInfo(projectInfo);
    activeMenu(projectInfo);
  }

  return (
    <div>
      {data?.map((item, index) => (
        <div key={index}>
          <button className="menu-btn" onClick={() => handleDisplayMenuList(item.type)}>
            {item.primaryNavigation}
          </button>
          {item?.secondaryNavigation.map((project, index) => (
            <div
              style={{
                display: eval(`show${item.type}Menu`) ? 'block' : 'none',
                marginLeft: '8px'
              }}
              key={index}
              onClick={() =>
                handleShowProject({
                  projectId: project.projectId,
                  projectName: project.projectName,
                  projectType: item.type
                })
              }
            >
              {project.projectName}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
