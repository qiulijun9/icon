import React, { useState } from 'react';
import CreateProjectDialog from '../project/CreateProjectDialog';
import UploadIconsDialog from '../icon/UploadIconsDialog';
import Dialog from '../basic_components/Dialog/Dialog';
import BackgroundPickerDialog from '../backgroundPicker/BackgroundPickerDialog';
import { useCopy } from '../../custom_hooks/index';
import './NavigationButton.scss';
const NavigationButton = () => {
  const copyCode = useCopy();
  const [showProjectDialog, setShowProjectDialog] = useState(false);
  const [showUploadIconDialog, setShowUploadIconDialog] = useState(false);
  const [showDeleteProjectDialog, setShowDeleteProjectDialog] = useState(false);
  const [showBackgroundrDialog, setShowBackgroundrDialog] = useState(false);
  function handleDownloadProject() {
    window.open(`http://www.baidu.com/img/baidu_jgylogo3.gif`, '_blank');
  }
  function handleCopyProjectHref() {
    copyCode('nihao erer');
    alert('复制成功');
  }
  return (
    <div className="project-icon-btn-container">
      <div className="project-tool">
        <button className="btn-operation" onClick={() => setShowProjectDialog(true)}>
          <svg className="icon icon-operation" aria-hidden="true">
            <use xlinkHref="#icon-xinjian" />
          </svg>
          新建项目
        </button>
        <CreateProjectDialog
          visible={showProjectDialog}
          callback={() => setShowProjectDialog(false)}
        />
      </div>
      <div className="project-tool">
        <button className="btn-operation" onClick={() => setShowUploadIconDialog(true)}>
          <svg className="icon icon-operation" aria-hidden="true">
            <use xlinkHref="#icon-unie123" />
          </svg>
          上传图标
        </button>
        <UploadIconsDialog
          display={showUploadIconDialog}
          callback={() => setShowUploadIconDialog(false)}
        />
      </div>
      <div className="project-tool">
        <button className="btn-operation" onClick={() => handleDownloadProject()}>
          <svg className="icon icon-operation" aria-hidden="true">
            <use xlinkHref="#icon-unie122" />
          </svg>
          下载项目
        </button>
      </div>
      <div className="project-tool">
        <button
          className="btn-operation"
          onClick={() => setShowDeleteProjectDialog(true)}
        >
          <svg className="icon icon-operation" aria-hidden="true">
            <use xlinkHref="#icon-shanchu1" />
          </svg>
          删除项目
        </button>
        <Dialog
          visible={showDeleteProjectDialog}
          title="删除项目"
          outsideClickCancel={true}
          onCancel={() => setShowDeleteProjectDialog(false)}
        >
          <div className="dialog-content">确定要删除项目吗？</div>
        </Dialog>
      </div>
      <div className="project-tool">
        <button className="btn-operation" onClick={() => handleCopyProjectHref()}>
          <svg className="icon icon-operation" aria-hidden="true">
            <use xlinkHref="#iconcopy" />
          </svg>
          复制链接
        </button>
      </div>
      <div className="project-tool">
        <button className="btn-operation" onClick={() => setShowBackgroundrDialog(true)}>
          <svg className="icon icon-operation" aria-hidden="true">
            <use xlinkHref="#icon-yulanbeijingse" />
          </svg>
          调节背景色
        </button>
        <BackgroundPickerDialog
          visible={showBackgroundrDialog}
          callback={() => setShowBackgroundrDialog(false)}
        />
      </div>
      <div className="project-tool">
        <button
          className="btn-operation"
          onClick={() => setShowDeleteProjectDialog(true)}
        >
          <svg className="icon icon-operation" aria-hidden="true">
            <use xlinkHref="#icon-last-cache" />
          </svg>
          模板代码
        </button>
      </div>
    </div>
  );
};

export default NavigationButton;
