import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Setting } from "./pages/Setting";
import { SugroPagi } from "./pages/SugroPagi";
import { SugroPetang } from "./pages/SugroPetang";
import { KubroPagi } from "./pages/KubroPagi";
import { KubroPetang } from "./pages/KubroPetang";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <h1>Not Found</h1>,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/setting",
      element: <Setting />,
    },
    {
      path: "/pagi-sugro",
      element: <SugroPagi />,
    },
    {
      path: "/petang-sugro",
      element: <SugroPetang />,
    },
    {
      path: "/pagi-kubro",
      element: <KubroPagi />,
    },
    {
      path: "/petang-kubro",
      element: <KubroPetang />,
    },
  ]);
  return <RouterProvider router={router} />;
}
