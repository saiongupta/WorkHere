import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, StarsCanvas } from "./components";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/about",
      element: <><Toaster />
      <Navbar /><About /><Tech /></>
    },
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/work",
      element: <><Navbar /><Experience /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /><StarsCanvas /></>
    },
    {
      path: "/signup",
      element: <><Navbar /><Signup /><StarsCanvas /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /><StarsCanvas /></>
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;