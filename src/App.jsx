// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // library router untuk react
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
// import './App.css'

const router = createBrowserRouter([
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
