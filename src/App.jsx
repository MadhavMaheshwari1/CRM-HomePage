import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';


const App = () => {
  return (
    <Router>
      <div className="flex mx-auto max-w-[1920px]">
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
