import React from 'react';
import Button from '../basic_components/Button/Button';

const Login = () => {
  console.log(111);
  return (
    <div>
      <div>
        <input type="text" placeholder="用户名" />
      </div>
      <div>
        <input type="password" placeholder="密码" />
      </div>
      <Button
        text="登录"
        type="primary"
        size="xm"
        onClick={() => {
          console.log('！！！');
        }}
      />
    </div>
  );
};
export default Login;
