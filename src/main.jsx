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
import ForOhFor from "./Components/ForOhfor/ForOhFor.jsx";
import ViewDetails from "./Components/ViewDetails/ViewDetails.jsx";
import Update from "./Components/Update/Update.jsx";
import PrivateRoute from "./Components/Private/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://server-toygem-tigermursa.vercel.app/toys`),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch(`https://server-toygem-tigermursa.vercel.app/toys/`),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://server-toygem-tigermursa.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/addtoys",
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
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
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <ForOhFor></ForOhFor>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
