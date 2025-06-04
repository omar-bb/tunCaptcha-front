import React from 'react';
import { ConfigProvider } from 'antd';
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
      </div>
    </ConfigProvider>
  );
}

export default App;
