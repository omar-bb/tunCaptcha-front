import React, { useState, useEffect } from "react";
import { Input, Button, Card, Space, Tooltip, Spin } from "antd";
import { ReloadOutlined, AudioOutlined, CheckOutlined } from "@ant-design/icons";
import axios from "axios";

const Captcha = () => {
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaImage, setCaptchaImage] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');

  const fetchCaptcha = async () => {
    setImageLoaded(false);
    try {
      const response = await axios.get("http://127.0.0.1:80/api/get_captcha");
      const token = response.data.captcha_token;
      setCaptchaToken(token);
      setCaptchaImage(`http://127.0.0.1:80/api/get_captcha_image/${token}`);
    } catch (err) {
      console.error('Error fetching CAPTCHA:', err);
    }
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:80/api/verify_captcha", {
        user_input: userInput,
        captcha_token: captchaToken
      });
      console.log(captchaToken)
      console.log(userInput)
      setMessage(response.data.success ? 'CAPTCHA Verified!' : 'Incorrect CAPTCHA');
    } catch (err) {
      setMessage('Error verifying CAPTCHA')
    }
  }  

  return (
    <>
      <div style={{ padding: "24px", display: "flex", justifyContent: "center" }}>
        <Card
          style={{ width: 400, borderRadius: 10, padding: 0, overflow: "hidden" }}
          bodyStyle={{ padding: 0 }}
        >
          <div style={{ display: "flex", borderBottom: "1px solid #ccc" }}>
            <img
              src="../../public/captcha_arabic.png"
              alt="captcha text"
              style={{ width: "50%", height: "60px", objectFit: "cover" }}
            />
            <div
              style={{
                width: "50%",
                height: "60px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
              }}
            >
              {!imageLoaded && (
                <div
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Spin />
                </div>
              )}
              <img
                src={captchaImage}
                alt="captcha number"
                style={{ width: "100%", height: "60px", objectFit: "cover" }}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 12px",
              background: "#f2f2f2",
            }}
          >
            <Input
              placeholder="أدخل الكلمتين أعلاه"
              style={{ flex: 1, marginRight: 8, background: "#fff" }}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <Space>
              <Tooltip title="Refresh CAPTCHA">
                <Button icon={<ReloadOutlined />} onClick={fetchCaptcha} />
              </Tooltip>
              <Tooltip title="Audio CAPTCHA">
                <Button icon={<AudioOutlined />} />
              </Tooltip>
            </Space>
          </div>
        </Card>
      </div>
      <p>{message}</p>
      <Button type="primary" icon={<CheckOutlined />} onClick={handleSubmit}>تحقق من أنك إنسان</Button>
    </>
  );
};

export default Captcha;
