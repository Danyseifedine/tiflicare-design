import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Billing from "./components/billing/Billing.jsx";
import Engagement from "./components/engagement/Engagement.jsx";
import Management from "./components/management/Management.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import AboutUs from "./components/AbouUs/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/billing", element: <Billing /> },
      { path: "/engagement", element: <Engagement /> },
      { path: "/management", element: <Management /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/aboutus", element: <AboutUs /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
