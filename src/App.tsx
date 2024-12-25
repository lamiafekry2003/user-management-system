import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "./Component/AuthLayout/AuthLayout";
import Login from "./Component/Login/Login";
import MasterLayout from "./Component/MaterLayout/MasterLayout";
import Home from "./Component/Home/Home";
import AddUser from "./Component/AddUser/AddUser";
import Profile from "./Component/Profile/Profile";
import NotFound from "./Component/NotFound/NotFound";
import { ToastContainer } from "react-toastify";

function App() {
  const routs = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "dashboard",
      element: <MasterLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "adduser", element: <AddUser /> },
        { path: "updateuser/:id", element: <AddUser /> },
        { path: "profile", element: <Profile /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
    <ToastContainer />
    <RouterProvider router={routs} />
  </>
  )
}

export default App
