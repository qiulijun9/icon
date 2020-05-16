import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '../basic_components/Button/Button';

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function changeUsername(username: string) {
    setUsername(username);
  }
  function changePassword(password: string) {
    setPassword(password.toString());
  }
  function handleLogin() {
    let loginData = {
      username,
      password,
    };
    fetch('/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(2222, data);
        localStorage.setItem('token', data.token);
        if (data.code === 200) {
          history.push('/project');
        }
        if (data.state === 'error') {
          alert('密码错误');
        }
      });
  }
  const controller = new AbortController();
  const signal = controller.signal;
  function handleRegister() {
    let registerData = {
      username,
      password,
    };
    var CancelToken = axios.CancelToken;
    var source = CancelToken.source();
    axios
      .post('/register', {
        registerData,
        cancelToken: source.token,
      })
      .then(res => {
        alert('注册成功');
      })
      .catch(res => {
        console.log(res);
      });
    setTimeout(() => {
      source.cancel('Operation canceled by the user.');
    }, 100);
    //   fetch('/register', {
    //     method: 'POST',
    //     credentials: 'include',
    //     body: JSON.stringify(registerData),
    //     headers: {
    //       'content-type': 'application/json',
    //     },
    //     signal,
    //   })
    //     .then(res => {
    //       return res.json();
    //     })
    //     .then(data => {
    //       alert('注册成功');
    //     });
  }
  // setTimeout(() => {
  //   controller.abort();
  // }, 1000);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="用户名"
          onChange={e => changeUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="密码"
          onChange={e => changePassword(e.target.value)}
        />
      </div>
      <Button text="登录" type="primary" size="xm" onClick={() => handleLogin()} />
      <Button text="注册" type="primary" size="xm" onClick={() => handleRegister()} />
    </div>
  );
};
export default Login;
