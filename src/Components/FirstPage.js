import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';
import './input.css';

function FirstPage() {
  return (
    <Router>
      <nav>
        <NavLink to="/UserLogin" activeClassName="active" className="switch-link">
          Login
        </NavLink>
        <NavLink to="/UserRegistration" activeClassName="active" className="switch-link">
          Signup
        </NavLink>
      </nav>

      <Routes>
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserRegistration" element={<UserRegistration />} />
      </Routes>
    </Router>
  );
}

export default FirstPage;
