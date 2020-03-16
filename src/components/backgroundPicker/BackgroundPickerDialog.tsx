import React from 'react';
import Dialog from '../basic_components/Dialog/Dialog';

interface Props {
  visible: boolean;
  callback: Function;
}

const BackgroundPickerDialog = (props: Props) => {
  const { visible, callback } = props;
  return (
    <Dialog
      visible={visible}
      title="调节背景色"
      outsideClickCancel={true}
      onCancel={() => callback()}
    >
      <div className="dialog-content">
        <div className="dialog-project-name">
          <input type="text" placeholder="项目名称" className="dialog-input" />
        </div>
        <div className="dialog-project-type">222</div>
      </div>
    </Dialog>
  );
};
export default BackgroundPickerDialog;
