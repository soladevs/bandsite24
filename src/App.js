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
          <Route path="/bandsite24/store" element={<Store />} />
          <Route path="/bandsite24/social" element={<Social />} />
          <Route path="/bandsite24/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
