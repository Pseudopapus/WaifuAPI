import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/index.css';

// layouts
import MainLayout from './layout/main/MainLayout';
import LandingLayout from './layout/landing/LandingLayout';

// pages
import Error from './page/error/Error';
import List from './page/list/List';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/WaifuAPI/" element={<MainLayout/>}>
          <Route path="/WaifuAPI/" element={<List/>}/>
          <Route path="/WaifuAPI/list" element={<List/>}/>
        </Route>
        <Route path="/WaifuAPI/landing" element={<LandingLayout/>}>
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)