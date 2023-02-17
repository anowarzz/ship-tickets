import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ShipDetailsPage from "../Pages/ShipDetailsPage/ShipDetailsPage";



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
          path: "/shipsDetail/:id",
          element: <ShipDetailsPage />,
          loader: ({params}) => {
            return fetch(`https://ship-ticket-server.vercel.app/shipsDetail/${params.id}`)
          }
        },
        
      ],
    },
  ]);

  export default router ;