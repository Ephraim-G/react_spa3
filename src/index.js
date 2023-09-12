
import { createRoot } from 'react-dom/client';
import React from "react";
import "./index.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  import Home from "./Home";
  import Stuff from "./Stuff";
  import Contact from "./Contact";
  import Layout from "./Layout" 
// path must be set with react app public url 
  const path = process.env.REACT_APP_PUBLIC_URL + '/'

const router = createBrowserRouter(
  createRoutesFromElements(
    // set route as the path plus layout
    <Route path={path} element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path={path + "Stuff"} element={<Stuff />}/>
      <Route path={path + "contact"} element={<Contact />}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);