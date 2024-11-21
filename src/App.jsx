import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Cats from "./app/cats/index"

/**
 *  Hier ist der Router mit den definierten Routen
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/cats" replace={true}/>,
  },
  {
    path: "cats",
    element: <Cats />
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
