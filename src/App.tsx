import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1 className="text-3xl font-bold underline">Hello world!</h1>,
    },
    {
      path: "/about",
      element: <h1 className="text-3xl font-bold underline">About us</h1>,
    },
    {
      path: "/setting",
      element: <h1 className="text-3xl font-bold underline">Setting</h1>,
    },
    {
      path: "/pagi-sugro",
      element: <h1 className="text-3xl font-bold underline">Pagi kubro</h1>,
    },
    {
      path: "/petang-sugro",
      element: <h1 className="text-3xl font-bold underline">Petang kubro</h1>,
    },
    {
      path: "/pagi-kubro",
      element: <h1 className="text-3xl font-bold underline">Pagi kubro</h1>,
    },
    {
      path: "/petang-kubro",
      element: <h1 className="text-3xl font-bold underline">Petang kubro</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
}
