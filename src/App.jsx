import React from 'react';
import { Button, ConfigProvider } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import Captcha from './components/Captcha';
import './App.css';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Rubik'
        }
      }}
    >
      <div className="App center">
        <h1>TunCaptcha</h1>
        <Captcha />
        <Button type="primary" icon={<CheckOutlined />}>تحقق من أنك إنسان</Button>
      </div>
    </ConfigProvider>
  );
}

export default App;
