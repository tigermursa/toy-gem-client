import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import AllToys from "./Components/AllToys/AllToys.jsx";
import MyToys from "./Components/MyToys/MyToys.jsx";
import AddToys from "./Components/AddToys/AddToys.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import AuthProvider from "./Components/Provider/AuthProvider.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import LogIn from "./Components/LogIn/LogIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/addtoys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
