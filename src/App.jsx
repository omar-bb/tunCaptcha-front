import React from 'react';
import { Button, ConfigProvider } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
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
        <Button type="primary" icon={<CheckOutlined />}>تحقق من أنك إنسان</Button>
      </div>
    </ConfigProvider>
  );
}

export default App;
