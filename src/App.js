import React from 'react';
import { HashRouter, useRoutes } from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import Contact from './Contact';
import Social from './Social';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/store", element: <Store /> },
    { path: "/contact", element: <Contact /> },
    { path: "/social", element: <Social /> }
  ]);
  return routes;
};

export default App;
