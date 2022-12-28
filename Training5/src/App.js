import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";

import Task2Layout from "./layouts/Task2Layout";
import Login from "./pages/auth/login";
import Home from "./pages/home";
import Task1 from "./pages/task1";
import HomeTask2 from "./pages/task2/home";
import MyInfo from "./pages/task2/my-info";
import Users from "./pages/task2/users";
import CheckRoute from "./routes/CheckRoute";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="*" element={<CheckRoute />} />
        <Route path="/" element={<Home />} />
        <Route path="task1" element={<Task1 />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="task2" element={<Task2Layout />}>
            <Route path="home" element={<HomeTask2 />} />
            <Route path="users">
              <Route path="" element={<Users />} />
              <Route path=":id" element={<Users />} />
            </Route>
            <Route path="my-info" element={<MyInfo />} />
          </Route>
        </Route>
      </Route>
      <Route path="auth" element={<PublicRoute />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
