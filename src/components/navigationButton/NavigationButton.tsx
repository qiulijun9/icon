import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../redux/state';
import CreateProjectDialog from '../project/CreateProjectDialog';
import UploadIconsDialog from '../icon/UploadIconsDialog';
import { Dialog, Switch } from '../basic_components/index';
import { useCopy } from '../../custom_hooks/index';
import './NavigationButton.scss';
const NavigationButton = () => {
  const copyCode = useCopy();
  const [showProjectDialog, setShowProjectDialog] = useState(false);
  const [showUploadIconDialog, setShowUploadIconDialog] = useState(false);
  const [showDeleteProjectDialog, setShowDeleteProjectDialog] = useState(false);

  function handleDownloadProject() {
    window.open(`http://www.baidu.com/img/baidu_jgylogo3.gif`, '_blank');
  }
  function handleCopyProjectHref() {
    copyCode('nihao erer');
    alert('复制成功');
  }
  const { currentProject, isBlackTheme } = useSelector((state: State) => {
    return {
      currentProject: state.currentProject,
      isBlackTheme: state.isBlackTheme
    };
  });
  const dispatch = useDispatch();
  function changerTheme() {
    dispatch({
      type: 'IS_BLACK_THEME',
      data: true
    });
    console.log(5555, isBlackTheme);
  }

  function deleteProject() {
    console.log(333, currentProject.projectId);
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
          onConfirm={() => deleteProject()}
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
      <div>
        <Switch onChange={() => changerTheme()} />
      </div>
    </div>
  );
};

export default NavigationButton;
