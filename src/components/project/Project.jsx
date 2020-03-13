import React, { useState } from 'react';
import Button from '../basic_components/Button/Button';
import Dialog from '../basic_components/Dialog/Dialog';
import Radio from '../basic_components/Radio/Radio';
import RadioGroup from '../basic_components/Radio/RadioGroup';
import AutoFitImg from '../basic_components/AutoFitImg/AutoFitImg';
import './Project.scss';

const Project = () => {
  const [showProjectDialog, setShowProjectDialog] = useState(false);
  function uploadIcons() {}
  function selectProjectType() {}
  function createProjectGroup() {
    setShowProjectDialog(true);
  }
  return (
    <div className="project-wrapper">
      <div className="project-header">
        <Button
          text="新建项目"
          type="primary"
          size="xm"
          onClick={() => createProjectGroup()}
        />
        <Dialog
          visible={showProjectDialog}
          title="新建项目"
          onCancel={() => setShowProjectDialog(false)}
          onConfirm={() => {
            console.log('232ff22');
          }}
        >
          <div className="dialog-content">
            <div className="dialog-project-name">
              <label>项目名称：</label>
              <input type="text" />
            </div>
            <div className="dialog-project-type">
              <label>项目归属：</label>
              <RadioGroup value="1" onChange={selectProjectType}>
                <Radio value="1">个人项目</Radio>
                <Radio value="2">团队项目</Radio>
              </RadioGroup>
            </div>
          </div>
        </Dialog>
        <button>新建分组</button>
        <button>上传图标</button>
      </div>
      <div className="project-list">
        <div className="project-group-container">
          <div className="project-name">basse</div>
          <div className="project-group">
            <figure
              // key={iconIndex}
              className="icon-item"
              draggable={false}
              // onClick={() => selectDispatch({ type: 'selectSingle', data: icon })}
            >
              <div className="icon-container">
                <AutoFitImg
                  src="/img/dog.jpg"
                  // alt={icon}
                  draggable={false}
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
