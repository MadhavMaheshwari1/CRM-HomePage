import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';
import Boards from './Pages/Boards';
import Tasks from './Pages/Tasks';
import Organisations from './Pages/Organisations';
import Albums from './Pages/Albums';
import PersonalProgress from './Pages/PersonalProgress';


const App = () => {
  return (
    <Router>
      <div className="flex mx-auto max-w-[1920px] cursor-pointer">
        <Sidebar />
        <div className='w-full lg:w-[90%]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/PersonalProgress" element={<PersonalProgress />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Albums" element={<Albums />} />
            <Route path="/Organisations" element={<Organisations />} />
            <Route path="/Tasks" element={<Tasks />} />
            <Route path="/Boards" element={<Boards />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
