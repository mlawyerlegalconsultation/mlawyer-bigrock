import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { RoleProvider } from './context/RoleContext'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

const oneTimeReloadKey = 'mlawyer:reloaded-once'
const hasReloadedOnce = sessionStorage.getItem(oneTimeReloadKey) === 'true'

if (!hasReloadedOnce) {
  sessionStorage.setItem(oneTimeReloadKey, 'true')
  window.location.reload()
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RoleProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </RoleProvider>
    </HelmetProvider>
  </StrictMode>,
)
