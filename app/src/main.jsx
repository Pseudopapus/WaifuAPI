import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/index.css';
import List from './page/list/List';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List />
  </StrictMode>,
)