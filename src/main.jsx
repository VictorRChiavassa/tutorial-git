import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "./pages/Login/LoginScreen";
import HomeScreen from "./pages/Home/HomeScreen";
import AboutScreen from "./pages/About/AboutScreen";
import ContactScreen from "./pages/Contact/ContactScreen";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/about",
    element: <AboutScreen />,
  },
  {
    path: "/contact",
    element: <ContactScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
