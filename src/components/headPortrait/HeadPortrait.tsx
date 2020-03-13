import React, { useState, useEffect, useRef } from 'react';
import './HeadPortrait.scss';
import Dialog from '../basic_components/Dialog/Dialog';
import Menu from '../basic_components/Menu/Menu';
import cutImage from '../../utils/cutImage';
interface Props {
  username?: string;
  avatar?: string;
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

let defaultMenu = [
  {
    type: 'Team',
    primaryNavigation: '团队项目',
    secondaryNavigation: [
      { projectId: '1', projectName: 'www' },
      { projectId: '2', projectName: '123' }
    ]
  },
  {
    type: 'Personal',
    primaryNavigation: '个人项目',
    secondaryNavigation: [{ projectId: '3', projectName: 'www' }]
  }
];
const HeadPortrait = (props: Props) => {
  const [display, setDisplay] = useState(false);
  const canvasContainer = useRef(null);
  const previewContainer = useRef(null);
  const [menuJson, setMenuJson]: [Array<Navigation>, Function] = useState([]);
  useEffect(() => {
    setMenuJson(defaultMenu);
  }, []);
  return (
    <div className="head-container">
      <div
        className="head-portrait"
        onClick={() => {
          setDisplay(true);
        }}
      >
        <div className="prompt">更换头像</div>
        <Dialog
          visible={display}
          onCancel={() => setDisplay(false)}
          onConfirm={() => {
            console.log('232ff22');
          }}
        >
          <div
            className="content-container"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 2rem 1rem'
            }}
          >
            <div
              className="canvasContainer"
              style={{ width: '60%', height: '100%' }}
              ref={canvasContainer}
            >
              222
            </div>
            <div
              className="previewContainer"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '35%',
                height: '100%'
              }}
              ref={previewContainer}
            >
              222
            </div>
          </div>
        </Dialog>
        <img
          src={
            props.avatar
              ? props.avatar
              : 'https://avatars2.githubusercontent.com/u/27626713?s=460&v=4'
          }
          alt="个人头像"
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <Menu data={menuJson} />
      </div>
    </div>
  );
};

export default HeadPortrait;
