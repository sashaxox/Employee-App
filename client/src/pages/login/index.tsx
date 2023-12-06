import { Card, Form, Row, Space, Typography } from "antd";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/custom-button";
import { Layout } from "../../components/layout";
import { Paths } from "../../paths";
import { CustomInput } from "../../components/custom-input";
import { PasswordInput } from "../../components/password-input";
import { UserData, useLoginMutation } from "../../app/services/auth";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { error } from "console";
import { selectUser } from "../../features/auth/authSlice";
import { ErrorMessage } from "../../components/error-message";

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loginUser, loginUserResult] = useLoginMutation();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();

      navigate("/");
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Войдите" style={{ width: "30rem" }}>
          <Form onFinish={login}>
            <CustomInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <CustomButton
              type="primary"
              htmlType="submit"
              loading={loginUserResult.isLoading}
            >
              Войти
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
