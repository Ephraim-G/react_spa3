
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

// path must be set with react app base url 

const router = createBrowserRouter(
  createRoutesFromElements(
    // set route as the path plus layout
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="stuff" element={<Stuff />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="*" element={<Page404 />}/>
    </Route>
  ),
  {basename: import.meta.env.BASE_URL}
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);