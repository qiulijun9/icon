import React from 'react';
import Button from '../basic_components/Button/Button';

const Login = () => {
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
        console.log(data);
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
    </div>
  );
};
export default Login;
