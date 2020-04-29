import React, { useState } from 'react';
import Upload from '../basic_components/Upload/Upload';
import Dialog from '../basic_components/Dialog/Dialog';
import './UploadIcons.scss';

interface icon {
  name:string,
  size:number
}
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
  const [files,setFiles]: [Array<File>,Function] = useState([]);
  const [uploadIcons, setUploadIcons]:[Array<icon>, Function] = useState([]);
  function uploadFilesCallback(files: Array<File>): void {
     setFiles(files);
     let newFileIcons: Array<icon> = [];
     files.map((file)=>{
       let fileInfo = {name:file.name,size:file.size};
       newFileIcons.push(fileInfo);
     })
     setUploadIcons(newFileIcons);
  };
  

  function fileUpload (){
    const formData = new FormData();
    files.map((file)=>{
      formData.append('file', file );
    })
    fetch('/upload', {
      method: 'POST',
      body: formData,
      // headers:{
      //   "Content-Type": "multipart/form-data"
      // }
     
    })
      .then(res => res.json())
      .then(data => {
        if(data.code === 200){
          props.callback();
          alert("上传成功");
        }else{
          props.callback();
          alert("上传失败");
        }
      });
   
   
  }

  return (
    <Dialog
      visible={props.display}
      title="上传图标"
      outsideClickCancel={true}
      onCancel={() => props.callback()}
      onConfirm={() => fileUpload()}
    >
      <div className="dialog-content">
        <div className="dialog-upload">
          <Upload accept={'image/*'} multiple={true}  callback={uploadFilesCallback} />
        </div>
        <div>
           {
             uploadIcons.length  && uploadIcons.map((file,index)=>(
              <div key = {index}>
                <span>{file.name}</span> 
                <span>{file.size}</span> 
              </div>
             ))
           }
        </div>
      </div>
    </Dialog>
  );
};

export default UploadIconsDialog;
