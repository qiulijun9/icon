import React, { useState } from 'react';
import { Dialog, Radio, RadioGroup } from '../basic_components/index';

export interface Props {
  visible: boolean;
  callback: Function;
}

const CreateProjectDialog = (props: Props) => {
  const { visible, callback } = props;

  const [projectType, setProjectType] = useState('1');
  function selectProjectType(e: any) {
    setProjectType(e.target.value);
  }

  return (
    <Dialog
      animationType="fade"
      visible={visible}
      title="新建项目"
      outsideClickCancel={true}
      onCancel={() => callback()}
    >
      <div className="dialog-content">
        <div className="dialog-project-name">
          <input type="text" placeholder="项目名称" className="dialog-input" />
        </div>
        <div className="dialog-project-type">
          <RadioGroup value={projectType} onChange={selectProjectType}>
            <Radio value="1">个人项目</Radio>
            <Radio value="2">团队项目</Radio>
          </RadioGroup>
        </div>
      </div>
    </Dialog>
  );
};

export default CreateProjectDialog;
