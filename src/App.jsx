// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // library router untuk react
import BannerLayout from "./layouts/BannerLayout";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
// import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <BannerLayout />,
    errorElement: <div>The URL does not exist. Please check it again.</div>, // error jika salah menulis url
    children: [
      {
        path: "/", // url path
        element: <Home />, // <Component />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },

  // BannerLayout tidak bisa diterapkan pada route ini
  // {
  //   path: "login",
  //   element: <Login />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
