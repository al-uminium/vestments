import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShoppingPage from './components/Shopping_Page/ShoppingPage';
import Item from './components/Item/Item';
// import { HashRouter } from "react-router-dom"
import { createHashRouter, RouterProvider, } from "react-router-dom";

import './variables.css'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/shop",
      element: <ShoppingPage />,
      children: [{
        path: "/shop/items/:id",
        element: <Item />,
      }]
    }]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <HashRouter>
      <App />
    </HashRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
