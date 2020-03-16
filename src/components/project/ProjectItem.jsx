import React, { useState } from 'react';
// import { useSelector, useDispatch, useStore } from 'react-redux';
// import { groupingStatusCreator } from '../../redux/action';
import ShadeIcons from '../icon/ShadeIcons';
import Button from '../basic_components/Button/Button';
import CreateGroupDialog from '../group/CreateGroupDialog';

import './ProjectItem.scss';
const ProjectItem = () => {
  const [showGroupDialog, setShowGroupDialog] = useState(false);
  // const data = useSelector(groupingStatusCreator);
  // console.log(data);
  const [imgIsGrouping, setImgIsGrouping] = useState(false);

  function handlePictureGrouping() {
    setImgIsGrouping(true);
    window.localStorage.setItem('isGrouping', imgIsGrouping);
  }
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(true);
  }
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
        <div className="project-group">
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
      </div>
    </div>
  );
};

export default ProjectItem;
