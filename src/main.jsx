// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// CSS
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./assets/reset.css";
import "./assets/styles.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// Routing
import { RouterProvider, createBrowserRouter } from "react-router";
import Layout from "./Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

// Mounting
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
