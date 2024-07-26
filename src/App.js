import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import Contact from './Contact';
import Social from './Social';

const App = () => {
  return (
    <Router basename="/bandsite24">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/social" element={<Social />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
