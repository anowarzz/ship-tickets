import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import ShipDetailsPage from "../Pages/ShipDetailsPage/ShipDetailsPage";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shipsDetail/:id",
          element: <ShipDetailsPage />,
          loader: ({params}) => {
            return fetch(`https://ship-ticket-server.vercel.app/shipsDetail/${params.id}`)
          },
          
        },
        {
          path: "/payment/:id",
          element: <PaymentPage />,
          loader: ({params}) => {
            return fetch(`https://ship-ticket-server.vercel.app/shipsDetail/${params.id}`)
          },

        },
        
      ],
    },
  ]);

  export default router ;