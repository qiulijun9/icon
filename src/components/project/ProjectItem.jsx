import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShadeIcons from '../icon/ShadeIcons';
import { Button, Drag } from '../basic_components/index';
import CreateGroupDialog from '../group/CreateGroupDialog';

import './ProjectItem.scss';
const ProjectItem = () => {
  const [showGroupDialog, setShowGroupDialog] = useState(false);
  const [imgIsGrouping, setImgIsGrouping] = useState(false);
  const { currentProject, isDraging } = useSelector(state => {
    return state;
  });
  const dispatch = useDispatch();
  const handlePictureGrouping = useCallback(() => {
    dispatch({ type: 'IS_GROUPING', data: true });
    setImgIsGrouping(true);
    console.log(222, imgIsGrouping);
    setTimeout(() => {
      console.log(222, imgIsGrouping);
    }, 0);
  }, [dispatch]);

  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(true);
  }

  const currentProjectId = currentProject['projectId'];

  const defaultProjects = {
    '1': {
      group1: {
        imgs: [
          { src: '/img/dog.jpg', imgName: 'wers', size: '20' },
          { src: '/img/dog.jpg', imgName: '2', size: '20' }
        ]
      },
      group2: {
        imgs: [{ src: '/img/dog.jpg', imgName: 'wers', size: '20' }]
      }
    },
    '2': {
      group1: {
        imgs: [{ src: '/img/dog.jpg', imgName: 'wers', size: '20' }]
      }
    }
  };
  return (
    <div>
      <div className="project-group-container">
        <div className="project-group-head">
          <div className="project-group-name">base</div>
          <div className="project-group-btn">
            <Button
              text="新建分组"
              type="primary"
              onClick={() => setShowGroupDialog(true)}
            />
            <CreateGroupDialog
              visible={showGroupDialog}
              callback={() => setShowGroupDialog(false)}
            />
            <Button
              text="图片分组"
              type="primary"
              onClick={() => handlePictureGrouping()}
            />
          </div>
        </div>

        {/* <Drag name="dropGroup" callback={() => {}}> */}
        <div
          className="project-group"
          style={{
            border: isDraging ? '1px solid #e94d0f' : 'none'
          }}
        >
          <figure
            className="icon-item"
            draggable={false}
            style={{
              border: active ? '1px solid #e94d0f' : 'none'
            }}
            onClick={() => handleClick()}
          >
            <div className="icon-container">
              <img className="icon" src="/img/dog.jpg" alt="img" draggable={false} />
              {!imgIsGrouping && <ShadeIcons />}
            </div>
          </figure>
        </div>
        {/* </Drag> */}
        {/* {defaultProjects['1'].keys(item => {
          return <div>dd</div>;
        })} */}

        {currentProjectId &&
          Object.entries(defaultProjects[currentProjectId]).map((item, index) => {
            return (
              <div className="project-item" key={index}>
                <div className="project-item-name">{item[0]}</div>
                <div className="project-item-image">
                  <div
                    className="project-group"
                    style={{
                      border: isDraging ? '1px solid #e94d0f' : 'none'
                    }}
                  >
                    {item[1].imgs.map((img, index) => {
                      return (
                        <figure
                          key={index}
                          className="icon-item"
                          draggable={false}
                          style={{
                            border: active ? '1px solid #e94d0f' : 'none'
                          }}
                          onClick={() => handleClick()}
                        >
                          <div className="icon-container">
                            <img
                              className="icon"
                              src={img.src}
                              alt="img"
                              draggable={false}
                            />
                            {img.imgName}
                            {!imgIsGrouping && <ShadeIcons />}
                          </div>
                        </figure>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectItem;
