import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Errorpage from "./components/Errorpage/Errorpage";
import Cards from "./components/Cards/Cards";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import Statistics from "./components/Statistics/Statistics";
import About from "./components/About/About";
import SelectedCart from "./components/SelectedCart/SelectedCart";
import Wishlist from "./components/Wishlist/Wishlist";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import PrivateRoute from "./provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Cards></Cards>,
        loader: () => fetch("/bookData.json"),
      },
      {
        path: "/details/:product_id",
        element: <PrivateRoute>
          <ProductDetails></ProductDetails>
        </PrivateRoute>,
        loader: () => fetch("/bookData.json"),
      },

      {
        path: "/dashboard",
        element: <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
          {
            path: "/dashboard",
            element: <SelectedCart></SelectedCart>,
            loader: () => fetch("/bookData.json"),
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist />,
            loader: () => fetch("/bookData.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
