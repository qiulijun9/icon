import React, { useState, useEffect, useRef } from 'react';
import './HeadPortrait.scss';
import { Menu, Dialog, DragContainer } from '../basic_components/index';
import { Navigation } from '../basic_components/Menu/Menu';

interface Props {
  username?: string;
  avatar?: string;
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
  let isGrouping = window.localStorage.getItem('isGrouping');
  console.log(222, isGrouping);
  useEffect(() => {
    setMenuJson(defaultMenu);
  }, []);
  return (
    <>
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
                style={{ width: '70%', height: '100%' }}
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
                  width: '30%',
                  height: '100%'
                }}
                ref={previewContainer}
              >
                222
              </div>
            </div>
          </Dialog>
          <svg
            className="icon icon-login"
            aria-hidden="true"
            style={{ marginLeft: '-10px' }}
          >
            <use xlinkHref="#icon-denglurizhi" />
          </svg>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Menu data={menuJson} />
        </div>
      </div>
      <div className="isGroupingContainer">
        <DragContainer
          rootStyle={{ width: '8rem', marginBottom: '2rem' }}
          dragBarStyle={{ width: '7rem' }}
          dragData={'sss'}
          // draggable={isGrouping}
        >
          <img className="icon" src="/img/dog.jpg" alt="img" draggable={false} />
        </DragContainer>
      </div>
    </>
  );
};

export default HeadPortrait;
