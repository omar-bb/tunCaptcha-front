
import React from "react";
import { Input, Button, Card, Space, Tooltip } from "antd";
import { ReloadOutlined, AudioOutlined } from "@ant-design/icons";

const Captcha = () => {
  return (
    <div style={{ padding: "24px", display: "flex", justifyContent: "center" }}>
      <Card
        style={{ width: 400, borderRadius: 10, padding: 0, overflow: "hidden" }}
        bodyStyle={{ padding: 0 }}
      >
        {/* CAPTCHA Images */}
        <div style={{ display: "flex", borderBottom: "1px solid #ccc" }}>
          <img
            src="../../public/captcha_arabic.png"
            alt="captcha text"
            style={{ width: "50%", height: "60px", objectFit: "cover" }}
          />
          <img
            src="../../public/captcha_test.png"
            alt="captcha number"
            style={{ width: "50%", height: "60px", objectFit: "cover" }}
          />
        </div>

        {/* Input + Actions */}
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
          />
          <Space>
            <Tooltip title="Refresh CAPTCHA">
              <Button icon={<ReloadOutlined />} />
            </Tooltip>
            <Tooltip title="Audio CAPTCHA">
              <Button icon={<AudioOutlined />} />
            </Tooltip>
          </Space>
        </div>
      </Card>
    </div>
  );
};

export default Captcha;
