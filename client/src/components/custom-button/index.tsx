import React from "react";
import { Form, Button } from "antd";

type Props = {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?: "primary" | "link" | "text" | "default" | "dashed" | undefined;
  danger?: boolean;
  loading?: boolean;
  shape?: "circle" | "default" | "round" | undefined;
  icon?: React.ReactNode;
  ghost?: boolean;
};

export const CustomButton = ({
  children,
  type,
  danger,
  loading,
  htmlType = "button",
  onClick,
  shape,
  icon,
  ghost,
}: Props) => {
  return (
    <Form.Item>
      <Button
        type={type}
        htmlType={htmlType}
        danger={danger}
        loading={loading}
        size="large"
        shape={shape}
        onClick={onClick}
        icon={icon}
        ghost={ghost}

      >
        {children}
      </Button>
    </Form.Item>
  );
};
