import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { RouterProvider } from "react-router-dom";
import { router } from "./config/router";
import './assets/app.css';
import UserContextProvider from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>

  </>
);
