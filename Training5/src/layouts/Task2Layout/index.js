import { Layout } from "antd";
import React from "react";
import {
  Outlet
} from "react-router-dom";
import HeaderTask2 from "../Header";
import Sidebar from "../Sidebar";
const { Header, Footer, Sider, Content } = Layout;

const Task2Layout = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: "white" }}>
        <HeaderTask2 />
      </Header>
      <Layout>
        <Sider>
          <div className="h-full bg-white">
            <Sidebar />
          </div>
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Footer className="fixed h-16 bg-gray-400 max-w-screen-lg w-full bottom-0">
        Zigvy Corp
      </Footer>
    </Layout>
  );
};

export default Task2Layout;
