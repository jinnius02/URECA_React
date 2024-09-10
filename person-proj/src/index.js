import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import UserList from "./pages/UserList";
import RegistUser from "./pages/RegistUser";
import EditUserInfo from "./pages/EditUserInfo";
import App from "./App";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/list" element={<UserList />} />
      <Route path="/regist" element={<RegistUser />} />
      <Route path="/edit/:userId" element={<EditUserInfo />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
