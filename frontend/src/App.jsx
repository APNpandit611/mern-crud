import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ShowProduct from "./pages/ShowProduct";
import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import DeleteProduct from "./pages/DeleteProduct";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/product/create',
    element: <CreateProduct />,
  },
  {
    path: '/product/details/:id',
    element: <ShowProduct />,
  },
  {
    path: '/product/update/:id',
    element: <EditProduct />,
  },
  {
    path: '/product/delete/:id',
    element: <DeleteProduct />,
  }
])

function App() {
    return (
        <>
            <RouterProvider router={appRouter}/>
        </>
    );
}

export default App;
