import React, { useState } from 'react';
import { Dialog, Radio, RadioGroup } from '../basic_components/index';
export interface Props {
  visible: boolean;
  callback: Function;
}

const CreateProjectDialog = (props: Props) => {
  const { visible, callback } = props;
  const [projectType, setProjectType] = useState('Personal');
  function selectProjectType(e: any) {
    setProjectType(e.target.value);
  }
  const [projectName, setProjectName] = useState('');

  function createProject() {
    // const postData = {
    //   projectName,
    //   projectType
    // };
    //TODO post createProject
  }
  return (
    <Dialog
      animationType="fade"
      visible={visible}
      title="新建项目"
      outsideClickCancel={true}
      onCancel={() => callback()}
      onConfirm={() => createProject()}
    >
      <div className="dialog-content">
        <div className="dialog-project-name">
          <input
            type="text"
            value={projectName}
            placeholder="项目名称"
            className="dialog-input"
            onChange={e => {
              setProjectName(e.target.value);
            }}
          />
        </div>
        <div className="dialog-project-type">
          <RadioGroup value={projectType} onChange={selectProjectType}>
            <Radio value="Personal">个人项目</Radio>
            <Radio value="Team">团队项目</Radio>
          </RadioGroup>
        </div>
      </div>
    </Dialog>
  );
};

export default CreateProjectDialog;
