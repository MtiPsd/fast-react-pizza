import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Order from "./features/order/Order";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";

// * Modern Way of using react router
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:orderId", element: <Order /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;