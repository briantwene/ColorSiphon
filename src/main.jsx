import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";
import ErrorPage from "./error-page";
import Extract from "./routes/extract";
import History from "./routes/history";
import Index from "./routes";
import Palette, { loader as paletteLoader } from "./routes/palette";
import Sensors from "./routes/sensors";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/extract",
        element: <Extract />
      },
      {
        path: "/history",
        element: <History />
      },
      {
        path: "/palette/:paletteId",
        element: <Palette />,
        loader: paletteLoader
      },
      {
        path: "/sensors",
        element: <Sensors />
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
