import React from "react";
import "./App.css";
import {
    createBrowserRouter,
    Navigate,
    Outlet,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";

import Task1 from "./pages/task1";
import Home from "./pages/Home";
import Login from "./pages/auth/login";
import HomeTask2 from "./pages/task2/Home";
import MyInfo from "./pages/task2/MyInfo";
import Users from "./pages/task2/Users";
import Sidebar from "./layouts/Sidebar";
import HeaderTask2 from "./layouts/Header";
import { Layout } from "antd";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PublicRoute from "./routes/PublicRoute";
import { useSelector } from "react-redux";

const { Header, Footer, Sider, Content } = Layout;
const MainLayout = () => {
    return (
        <div className="max-w-screen-lg max-h-screen h-screen m-auto w-full">
            <Outlet />
        </div>
    );
};
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

const CheckRoute = () => {
    const token = useSelector((state) => state.user.token);;
    if (token) {
        return <Navigate to="/task2" />;
    } else {
        return <Navigate to="/login" />;
    }
};
function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="*" element={<CheckRoute />} />
                <Route path="/" element={<Home />} />
                <Route path="/task1" element={<Task1 />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path="task2" element={<Task2Layout />}>
                        <Route path="" element={<HomeTask2 />} />
                        <Route path="users">
                            <Route path="" element={<Users />} />
                            <Route path=":id" element={<Users />} />
                        </Route>
                        <Route path="my-info" element={<MyInfo />} />
                    </Route>
                </Route>
            </Route>
            <Route element={<PublicRoute />}>
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    );
}

export default App;
