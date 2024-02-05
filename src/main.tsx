import './index.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from "./components/routers/router"
import ReactDOM from 'react-dom';



ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
