
import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import ContactPage from './pages/Contact.js';
import Advisors from './pages/Advisors.js';
import LeadershipTeam from './pages/LeadershipTeam.js';
import Process from './pages/Process.js';

const App = () => {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/advisors" element={<Advisors />} />
          <Route path="/meet-the-team" element={<LeadershipTeam />} />
          <Route path="/our-process" element={<Process />} />
        </Routes>
      </>
  );
};

export default App;