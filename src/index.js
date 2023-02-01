import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header'
import Home from './components/Home';
import Skills_view from './components/skills/Skills_view';
import Footer from './components/Footer';
import Education from './components/educations/Education';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills_view />} />
          <Route path='/educations' element={<Education />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
