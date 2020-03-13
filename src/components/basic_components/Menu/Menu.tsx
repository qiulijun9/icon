import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './Menu.scss';

export interface Props {
  data: Array<Navigation>;
  expanded?: boolean; //是否展开
}
export interface MenuType {
  projectId: string;
  projectName: string;
}
export interface Navigation {
  type: 'Team' | 'Personal';
  primaryNavigation: string;
  secondaryNavigation: Array<MenuType>;
}

const Menu = (props: Props) => {
  const routerHistory = useHistory();
  const { data, expanded = true } = props;
  const [showTeamMenu, setShowTeamMenu] = useState(expanded);
  const [showPersonalMenu, setShowPersonalMenu] = useState(expanded);

  function handleDisplayMenuList(type: string) {
    if (type === 'Team') setShowTeamMenu(!showTeamMenu);
    if (type === 'Personal') setShowPersonalMenu(!showPersonalMenu);
  }

  function handleShowProject(projectId: string) {
    routerHistory.push(`/project/${projectId}`);
  }
  return (
    <div>
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <button className="menu-btn" onClick={() => handleDisplayMenuList(item.type)}>
              {item.primaryNavigation}
            </button>
            {item?.secondaryNavigation.map((project, index) => {
              return (
                <div
                  style={{
                    display: eval(`show${item.type}Menu`) ? 'block' : 'none',
                    marginLeft: '8px'
                  }}
                  key={index}
                  onClick={() => handleShowProject(project.projectId)}
                >
                  {project.projectName}
                </div>
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default Menu;
