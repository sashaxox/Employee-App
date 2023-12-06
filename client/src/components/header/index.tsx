import {
  TeamOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import style from "./index.module.css";
import { CustomButton } from "../custom-button";
import { logout, selectUser } from "../../features/auth/authSlice";

export const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Layout.Header className={style.header}>
      <Space>
        <TeamOutlined className={style.teamIcon} />
        <Link to="/">
          <CustomButton type="default" ghost>
            <Typography>Сотрудники</Typography>
          </CustomButton>
        </Link>
      </Space>
      {user ? (
        <CustomButton
          type="text"
          icon={<LogoutOutlined />}
          onClick={onLogoutClick}
        >
          <Typography>Выйти</Typography>
        </CustomButton>
      ) : (
        <Space>
          <Link to="/register">
            <CustomButton type="text" icon={<UserOutlined />}>
              <Typography>Зарегистрироваться</Typography>
            </CustomButton>
          </Link>
          <Link to="/login">
            <CustomButton type="text" icon={<LoginOutlined />}>
              <Typography>Войти</Typography>
            </CustomButton>
          </Link>
        </Space>
      )}
    </Layout.Header>
  );
};
