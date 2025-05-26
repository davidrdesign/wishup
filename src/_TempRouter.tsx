import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Onboarding from './Onboarding';
import WishUp from './WishUp';
import ContributeCard from './ContributeCard';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/card/:id" element={<WishUp />} />
        <Route path="/contribute/:id" element={<ContributeCard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;