import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterApp } from './router/RouterApp'
import { ThemeProvider } from './ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterApp />
    </ThemeProvider>
  </StrictMode>,
)
