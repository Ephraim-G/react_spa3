
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
  import Layout from "./Layout";
  import Page404 from "./Page404";

  const path = process.env.PUBLIC_URL + '/'

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path={path} element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path={path + "Stuff"} element={<Stuff />}/>
      <Route path={path + "contact"} element={<Contact />}/>
      <Route path={path + "/*"} element={<Page404 />}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);