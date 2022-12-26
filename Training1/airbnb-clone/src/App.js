import "antd/dist/reset.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";

const MainLayout = () => {
    return (
        <div className="flex flex-col h-screen flex-1">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
