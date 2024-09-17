import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import Background from './components/Background.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Background/> */}
    <App />
  </StrictMode>,
);
