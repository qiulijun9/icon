import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../redux/state';
import { projectContainerContext } from '../project/ProjectContainer';
import { Menu, Dialog, DragContainer } from '../basic_components/index';
import { Navigation } from '../basic_components/Menu/Menu';
import './HeadPortrait.scss';
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
  const [menuJson, setMenuJson]: [Array<Navigation>, Function] = useState([]);
  const [activeMenu, setActiveMenu] = useState();
  const { isGrouping, isDraging } = useSelector((state: State) => {
    return {
      isGrouping: state?.isGrouping,
      isDraging: state?.isDraging
    };
  });

  const dispatch = useDispatch();
  const handleDrag = useCallback(() => {
    dispatch({ type: 'IS_DRAGING', data: true });
  }, [dispatch]);

  function handleActiveMenu(projectInfo: any) {
    projectInfo && setActiveMenu(projectInfo.projectId);
  }

  const { projectInfo } = useContext(projectContainerContext);
  console.log(444, projectInfo);

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
              <div className="canvasContainer" style={{ width: '70%', height: '100%' }}>
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
          <Menu data={menuJson} activeMenu={handleActiveMenu} />
        </div>
      </div>
      {isGrouping && (
        <div className="isGroupingContainer">
          <DragContainer
            // rootStyle={{ width: '7rem', marginBottom: '2rem' }}
            dragBarStyle={{ width: '7rem' }}
            dragData={'sss'}
            // draggable={isGrouping}
          >
            <img
              className="icon"
              style={{
                border: isDraging ? '2px solid #e94d0f' : 'none'
              }}
              src="/img/dog.jpg"
              alt="img"
              draggable={false}
              onClick={() => handleDrag()}
            />
          </DragContainer>
        </div>
      )}
    </>
  );
};

export default HeadPortrait;
