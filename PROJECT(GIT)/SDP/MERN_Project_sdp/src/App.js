// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/MainSection';
import SignUp from './components/SignUp';
import Transactions from './components/Transactions';
import MoneyTransfer from './components/MoneyTransfer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MainSection" element={<Home />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/MoneyTransfer" element={<MoneyTransfer />} />
      </Routes>
    </Router>
  );
};

export default App;