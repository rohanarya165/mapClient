import { Avatar, Layout, Popover } from "antd";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isClient } from "../core/helpers/validations/isClient";
import { authQuery, authStore } from "../core/states/auth";
import { userQuery } from "../core/states/user";
import { HomeRoutes } from "./HomeRoutes";

const { Header, Content } = Layout;

export const Home = () => {
  const [isPopOverVisible, setIsPopOverVisible] = useState(false);
  let avatarStyle = `ml-1  text-[16px] font-jost font-semibold`;
  let navigate = useNavigate();
  useEffect(() => {
    authQuery.getAuthentication$.subscribe((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        navigate("/");
      }
    });
  }, []);

  const logOut = () => {
    authStore.update({
      isAuthenticated: false,
    });
    console.log(authStore);
  };

  const content = (
    <div>
      {isClient() ? (
        <div>
          <p
            className="cursor-pointer flex"
            onClick={() => {
              navigate("/home/profile/view");
              setIsPopOverVisible(false);
            }}
          >
            Profile
          </p>
          <p
            className="cursor-pointer flex"
            onClick={() => {
              navigate("/createNewPassword");
              setIsPopOverVisible(false);
            }}
          >
            Change Password
          </p>
        </div>
      ) : (
        " "
      )}

      <p
        className="cursor-pointer flex"
        onClick={() => {
          logOut();
        }}
      >
        Log Out
      </p>
    </div>
  );

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <div className="rounded-[8px] pt-[10px]">
            <Popover
              className="cursor-pointer hover:text-red-500"
              placement="topLeft"
              title={
                <div className="my-2">
                  <span className={avatarStyle}>{userQuery.getName()}</span>
                </div>
              }
              content={content}
              trigger="click"
              visible={isPopOverVisible}
              onVisibleChange={() => {
                setIsPopOverVisible(!isPopOverVisible);
              }}
            >
              <span className="avatar-item">
                <Avatar
                  style={{
                    height: "40px",
                    width: "40px",
                    border: "2px",
                    fontSize: "19px",
                    fontFamily: "roboto",
                    color: "#001529",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "1px",
                  }}
                >
                  {userQuery.getName()}
                </Avatar>
              </span>
            </Popover>
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <HomeRoutes />
        </Content>
      </Layout>
    </>
  );
};
