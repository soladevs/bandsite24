import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import Contact from './Contact';
import Social from './Social';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={"/bandsite24"} element={<Home />} /> 
          <Route path="/store" element={<Store />} />
          <Route path="/social" element={<Social />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
