import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Layout for pages
import Layout from "./layout/Layout";
//pages
// import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import AddCustomers from "./pages/AddCustomers";
import ListCustomers from "./pages/ListCustomers";

// theme context

function App() {
  // router pages paths
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Login />,
    // },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/add-customers",
          element: <AddCustomers />,
        },
        {
          path: "/list-customers",
          element: <ListCustomers />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
