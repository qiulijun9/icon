import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '../basic_components/Button/Button';

const Login = () => {
  const history = useHistory();
  function handleLogin() {
    let loginData = {
      username: 'qlj',
      password: '222'
    };
    fetch('/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(res => res.json())
      .then(data => {
        if(data.code === 200){
          history.push("/project");
        }
      });
  }
  return (
    <div>
      <div>
        <input type="text" placeholder="用户名" />
      </div>
      <div>
        <input type="password" placeholder="密码" />
      </div>
      <Button text="登录" type="primary" size="xm" onClick={() => handleLogin()} />
      <form action="http://localhost:8001/upload" method="post" encType="multipart/form-data">
        <input type="file" name="file" />
        <input type="submit" value="上传" />
      </form>
    </div>
  );
};
export default Login;
