import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import smoothscroll from 'smoothscroll-polyfill';
import './main.scss'
import App from './App.tsx'

smoothscroll.polyfill();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
