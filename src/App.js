import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import ShipBookingPage from "./Pages/ShipBookingPage/ShipBookingPage";
import ShipDetailsPage from "./Pages/ShipDetailsPage/ShipDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ships/:id",
        element: <ShipDetailsPage />,
      },
      {
        path: "/ship-booking",
        element: <ShipBookingPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
