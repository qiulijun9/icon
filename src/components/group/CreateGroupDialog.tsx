import React from 'react';
import Dialog from '../basic_components/Dialog/Dialog';

export interface Props {
  visible: boolean;
  callback: Function;
}
const CreateGroupDialog = (props: Props) => {
  const { visible, callback } = props;
  return (
    <Dialog
      animationType={'rotate'}
      visible={visible}
      title="创建分组"
      outsideClickCancel={true}
      onCancel={() => callback()}
    >
      <div className="dialog-content">
        <input type="text" placeholder="分组名称" className="dialog-input" />
      </div>
    </Dialog>
  );
};

export default CreateGroupDialog;
