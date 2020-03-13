import React, { useState, useRef, useCallback } from 'react';
import PopUpLayer from '../PopUplayer/PopUplayer';
import './Dialog.scss';

export type CancelFn = () => void;
export type ConfirmPromiseFn = () => Promise<any> | void;

/*
  visible: boolean; // 是否显示
  title: string; // title
  cancelIcon?: boolean; // 右上角取消图标
  cancelBtn?: boolean; // 取消按钮
  confirmBtn?: boolean; // 确定按钮
  cancelBtnText?: string; // 取消文字
  confirmBtnText?: string; // 确定文字
  confirmBtnLoading?: boolean; // 确定时是否loading
  outsideClickCancel?: boolean; // 点击对话框外是否取消
  disabledConfirmBtn?: boolean; // 是否禁止掉确定按钮
  onCancel: () => void; // 取消回调
  onConfirm: () => void; // 确定回调
  children?: Object; // 内容
*/

interface Props {
  visible: boolean;
  title?: string;
  cancelIcon?: boolean;
  cancelBtn?: boolean;
  confirmBtn?: boolean;
  cancelBtnText?: string;
  confirmBtnText?: string;
  confirmBtnLoading?: boolean;
  outsideClickCancel?: boolean;
  disabledConfirmBtn?: boolean;
  onCancel?: CancelFn;
  onConfirm?: ConfirmPromiseFn;
  children?: Object;
}

function Dialog(props: Props) {
  const {
    confirmBtnLoading,
    outsideClickCancel,
    onConfirm = () => {},
    onCancel = () => {}
  } = props;

  const confirmFnRef = useRef<ConfirmPromiseFn>(onConfirm);
  confirmFnRef.current = onConfirm;

  const [isLoading, setIsLoading] = useState(false);
  const handleConfirm = useCallback(async () => {
    if (confirmBtnLoading) {
      setIsLoading(true);
      await confirmFnRef.current();
      setIsLoading(false);
    } else {
      confirmFnRef.current();
    }
  }, [confirmBtnLoading]);

  const cancelFnRef = useRef<CancelFn>(onCancel);
  cancelFnRef.current = onCancel;

  const handleOutsideClick = useCallback(() => {
    if (outsideClickCancel) {
      cancelFnRef.current();
    }
  }, [outsideClickCancel]);

  return (
    <PopUpLayer>
      {props.visible ? (
        <div className="bs-dialog-wrap" onClick={handleOutsideClick}>
          <div className="bs-dialog" onClick={e => e.stopPropagation()}>
            {(props.title || props.cancelIcon) && (
              <header className="bs-dialog-header">
                <div>{props.title}</div>
                <button className="bs-dialog-close" onClick={props.onCancel}>
                  x
                </button>
              </header>
            )}
            <div className="bs-dialog-content">{props.children}</div>
            {(props.cancelBtn || props.confirmBtn) && (
              <footer className="bs-dialog-footer">
                {props.cancelBtn && (
                  <button onClick={props.onCancel}>{props.cancelBtnText}</button>
                )}
                {props.confirmBtn && (
                  <button
                    className="bs-dialog-confirm"
                    disabled={props.disabledConfirmBtn || isLoading}
                    onClick={handleConfirm}
                  >
                    {props.confirmBtnText}
                  </button>
                )}
              </footer>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </PopUpLayer>
  );
}

Dialog.defaultProps = {
  visible: false,
  title: '',
  cancelIcon: true,
  cancelBtn: true,
  confirmBtn: true,
  cancelBtnText: '取消',
  confirmBtnText: '确定',
  confirmBtnLoading: false,
  outsideClickCancel: false,
  disabledConfirmBtn: false
};

export default Dialog;
