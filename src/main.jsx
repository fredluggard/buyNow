import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./styles/index.scss";
import About from "./pages/About.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import WishList from "./pages/WishList.jsx";
import Cart from "./pages/Cart.jsx";
import Products from "./pages/Products.jsx";
import Blog from "./pages/Blog.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/wishlist", element: <WishList /> },
  { path: "/cart", element: <Cart /> },
  { path: "/product", element: <Products /> },
  { path: "/product/:itemId", element: <Products /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
