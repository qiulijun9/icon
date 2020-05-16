import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import produce from 'immer';
import { State } from '../../redux/state';
import CreateProjectDialog from '../project/CreateProjectDialog';
import UploadIconsDialog from '../icon/UploadIconsDialog';
import { Dialog, Switch } from '../basic_components/index';
import { useCopy } from '../../custom_hooks/index';
import { serverPath } from '../../config';
import { useVirtualized2 } from '../../custom_hooks';
import './NavigationButton.scss';

const items = Array.from(Array(100000)).map((_, index) => {
  return {
    id: index,
    other: `${index} list`,
  };
});

const computeIndexHeight = (index: number) => {
  return index % 3 === 0 ? 25 : index % 2 === 0 ? 50 : 70;
};

const NavigationButton = () => {
  // const copyCode = useCopy();
  const copyCode = useCopy([
    [/^d$/, ''],
    ['a', 'b'],
  ]);
  const [showProjectDialog, setShowProjectDialog] = useState(false);
  const [showUploadIconDialog, setShowUploadIconDialog] = useState(false);
  const [showDeleteProjectDialog, setShowDeleteProjectDialog] = useState(false);

  useEffect(() => {
    let container = document.getElementById('container');
    console.log(container?.offsetLeft);
    console.log(container?.offsetTop);
  }, []);
  function handleDownloadProject() {
    window.open(`${serverPath}/downloadProject`, '_self');
  }
  function handleCopyProjectHref() {
    copyCode('nihao12, erer');
    alert('复制成功');
  }
  const { currentProject } = useSelector((state: State) => {
    return {
      currentProject: state.currentProject,
      isBlackTheme: state.isBlackTheme,
    };
  });
  const dispatch = useDispatch();
  function changerTheme() {
    dispatch({
      type: 'IS_BLACK_THEME',
      data: true,
    });
  }
  let obj = {
    name: 'xi',
    a: {
      age: 2,
    },
  };
  let currentState = {
    a: [],
    p: {
      x: 1,
    },
  };
  let person = {
    members: [
      {
        name: 'ronffy',
        age: 30,
      },
    ],
  };

  const [personState, setPersonState] = useState(person);
  function deleteProject() {
    console.log(333, currentProject.projectId);
    //第一种使用immer
    let obj2 = produce(obj, draft => {
      draft.a.age = 90;
    });
    //第二种使用
    let producer = produce(draft => {
      draft.p.x = 4;
    });
    let obj3 = producer(currentState);
    setPersonState(
      produce(person, draft => {
        draft.members[0].age = 50;
      })
    );
    setTimeout(() => {
      console.log(personState);
    }, 1000);
  }

  const { list, containerProps, wrapperProps, isScrolling } = useVirtualized2(items, {
    itemHeight: 50,
  });

  console.log(555, list);

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
        {/* <div style={{ color: 'red' }}>
          <svg style={{ color: 'red' }} aria-hidden="true">
            <use xlinkHref="#house" />
          </svg>
          svg
        </div> */}
        {/* <div style={{ color: 'red' }}>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <circle
              cx="100"
              cy="50"
              r="40"
              stroke="black"
              stroke-width="2"
              fill="currentColor"
            />
          </svg>
        </div> */}
        {/* <img src="/img/icon.svg" />
        <img src="http://localhost:8000/upload/house.jpeg" /> */}
      </div>

      {/* <div>
        <Switch onChange={() => changerTheme()} />
         <div style={{width:0,height:0, borderTop: '50px solid black',borderRight: '50px solid red'}}></div> */}
      {/* <div style={{position:"relative",width:"200px",height:"200px",
         backgroundColor:"red",top:'100px',left:"200px"
      }} id="container">22</div> */}
      {/* <div style={{position:"relative",width:"200px",height:"200px",
         backgroundColor:"red",	transform: 'translate(200px,100px)'
      }} id="container">22</div>
      </div>  */}
      {/* 九宫格布局 */}
      {/* <ul className="item-container">
          <li className="item">1</li>
          <li className="item">2</li>
          <li className="item">3</li>
          <li className="item">4</li>
          <li className="item">5</li>
          <li className="item">6</li>
          <li className="item">7</li>
          <li className="item">8</li>
          <li className="item">9</li>
        </ul>   */}

      {/* 九宫格布局
        <div className ="container">
          <div className="wrapper">
            <div className="ite">1</div>
            <div className="ite">2</div>
            <div className="ite">3</div>
          </div>
          <div className="wrapper">
            <div className="ite">4</div>
            <div className="ite">5</div>
            <div className="ite">6</div>
          </div>
          <div className="wrapper">
            <div className="ite">7</div>
            <div className="ite">8</div>
            <div className="ite">9</div>
          </div>
        </div> */}

      {/* align-item 和align-content 区别
        <div className='flex'>
          <div className='i1'>1</div>
          <div className='i2'>2</div>
          <div className='i3'>3</div>
          <div className='i4'>4</div>
          <div className='i5'>5</div>
          <div className='i6'>6</div>
        </div> */}

      {/* 两列布局
        <div style={{width:'300px',position:'relative'}}>
          <div className="left"></div>
          <div className="right"></div>
        </div> */}

      {/* 高度塌陷 */}
      {/* <div>
        <div className="parent">
          <div className="child"></div>
          <div className="child"></div>
        </div>
        </div> */}

      {/* margin重叠 */}
      {/* <div className="p-container">
        <div style={{ overflow: 'hidden' }}>
          <p>hahha</p>
        </div>
        <p>haha</p>
      </div> */}

      {/* <div
        {...containerProps}
        style={{
          width: '300px',
          height: '400px',
          margin: '0 auto',
          overflow: 'auto',
          background: '#eee',
        }}
      >
        <div {...wrapperProps}>
          {list.map(item => (
            <div style={{ height: 50 }} key={item.id}>
              编号: {item.id}
            </div>
          ))}
        </div>
      </div> */}
      {/* <div
      {...containerProps}
      style={{
        width: '300px',
        height: '400px',
        margin: '0 auto',
        overflow: 'auto',
        background: '#eee'
      }}
    >
    <div {...wrapperProps}>
        {isScrolling
            ? list.map(item => (
                <div style={{ height: computeIndexHeight(item.id), boxSizing: 'border-box' }} key={item.id}>
                  滚动时展示的内容(用于限制个数后每一项渲染仍耗费大量资源的情况): {item.id}
                </div>
              ))
            : list.map(item => (
                <div style={{ height: computeIndexHeight(item.id), boxSizing: 'border-box' }} key={item.id}>
                  实际内容: {item.id}
                </div>
             ))
        }
      </div>
    </div> */}
    </div>
  );
};

export default NavigationButton;
