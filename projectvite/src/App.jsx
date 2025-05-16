import * as React from "react";
import * as ReactDOM from "react-dom";
import './global.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./Travel/Home";
import About from "./components/About";

import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import TicketBooking from "./components/TicketBooking";
import Login from "./components/Login";



const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    
    {
      path:"/gallery",
      element:<Gallery/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/ticket",
      element:<TicketBooking/>
    },
    {
      path:"/login",
      element:<Login/>
    }
    
  ]);


function App() {
  return (
         <div>
   <RouterProvider router={router}/>
      

     </div>
  )
}

export default App
