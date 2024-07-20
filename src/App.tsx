import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import NearEarthObject from './components/Neo';
import PhotoOfDay from './components/PhotoOfDay';
import NoPage from './components/NoPage';

function App() {
  return (
    <div className='App'>
      
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="photoofday" element={<PhotoOfDay />} />
          <Route path="near" element={<NearEarthObject />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;