import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FormContextProvider from './FormContextProvider';
createRoot(document.getElementById('root')).render(
  <FormContextProvider>
  <StrictMode>
      <App />
  </StrictMode>
  </FormContextProvider>
)
