import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import { Container } from '@mui/material'; 
import Counter from './components/Counter';
import UserData from './components/UserData';
import TextEditors from './components/TextEditors';
import Dashboard from './components/Dashboard';
import "./App.css";


const App = () => {
  return (
      <Container>
        <nav className='navbar'>
          <Link className='navlink' to="/">Counter</Link> 
          <Link className='navlink' to="/form">User Form</Link> 
          <Link className='navlink' to="/editor">Rich Text Editor</Link> 
          <Link className='navlink' to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/form" element={<UserData />} />
          <Route path="/editor" element={<TextEditors />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
  );
}

export default App