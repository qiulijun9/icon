import React, { useState } from 'react';
import Dialog from '../basic_components/Dialog/Dialog';
import { useCopy } from '../../custom_hooks/index';
import { serverPath } from  '../../config/index';
import './ShadeIcons.scss';


interface Props {
  fileName: string
}

const ShadeIcons = (props:Props) => {
  const { fileName } = props;
  const copyCode = useCopy();
  const [showIconZoomDialog, setShowIconZoomDialog] = useState(false);
  const [showDeleteIconDialog, setShowDeleteIconDialog] = useState(false);

  function handleDownload() {
    window.open(`${serverPath}/download/${fileName}`, '_self');
  }

  function handleCopyCode() {
    copyCode('nihao erer');
    alert('复制成功');
  }

  return (
    <div className="icon-shade-page">
      <div className="icon-shade-container">
        <div
          className="icon-tool-container"
          title="下载图标"
          onClick={() => handleDownload()}
        >
          <svg className="icon icon-tool" aria-hidden="true">
            <use xlinkHref="#icon-unie122" />
          </svg>
        </div>
        <div
          className="icon-tool-container"
          title="删除图标"
          onClick={() => setShowDeleteIconDialog(true)}
        >
          <svg className="icon icon-tool" aria-hidden="true">
            <use xlinkHref="#icon-piliangshanchu" />
          </svg>
        </div>
        <Dialog
          visible={showDeleteIconDialog}
          title="删除图标"
          outsideClickCancel={true}
          onCancel={() => setShowDeleteIconDialog(false)}
        >
          <div style={{ textAlign: 'center', fontSize: '20px' }}>是否要删除选中图标</div>
        </Dialog>

        <div
          className="icon-tool-container"
          title="编辑图标"
          onClick={() => console.log(2222)}
        >
          <svg className="icon icon-tool" aria-hidden="true">
            <use xlinkHref="#iconbianji" />
          </svg>
        </div>
        <div
          className="icon-tool-container"
          title="加入购物车"
          onClick={() => console.log(2222)}
        >
          <svg className="icon icon-tool" aria-hidden="true">
            <use xlinkHref="#iconcart-full" />
          </svg>
        </div>
        <div
          className="icon-tool-container"
          title="查看大图"
          onClick={() => setShowIconZoomDialog(true)}
        >
          <svg className="icon icon-tool" aria-hidden="true">
            <use xlinkHref="#icon-fangda1" />
          </svg>
        </div>
        <Dialog
          visible={showIconZoomDialog}
          outsideClickCancel={true}
          onCancel={() => setShowIconZoomDialog(false)}
        >
          <div className="icon-zoom-page">
            <img className="icon-zoom" src="/img/dog.jpg" alt="img" draggable={false} />
          </div>
        </Dialog>
        <div
          className="icon-tool-container"
          title="复制代码"
          onClick={() => handleCopyCode()}
        >
          <svg className="icon icon-tool icon-copy-container " aria-hidden="true">
            <use xlinkHref="#iconcopy" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ShadeIcons;
