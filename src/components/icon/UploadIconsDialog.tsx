import React from 'react';
import Upload from '../basic_components/Upload/Upload';
import Dialog from '../basic_components/Dialog/Dialog';
import './UploadIcons.scss';

export interface Props {
  display: boolean;
  callback: Function;
  // projectId: string;
  // path: string;
  // // currentProject: CurrentProject;
  // tooltipConfigCreator: Function;
  // currentProjectCreator: Function;
}

const UploadIconsDialog = (props: Props) => {
  function uploadFilesCallback(files: Array<File>): void {}

  return (
    <Dialog
      visible={props.display}
      title="上传图标"
      outsideClickCancel={true}
      onCancel={() => props.callback()}
    >
      <div className="dialog-content">
        <div className="dialog-upload">
          <Upload accept={'image/*'} callback={uploadFilesCallback} />
        </div>
        <div className="progress">
          <div className="file-progress-container">
            {/* <div className="control">
              <span className="file-name">dog</span>
              <span>20m</span>
            </div> */}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default UploadIconsDialog;
