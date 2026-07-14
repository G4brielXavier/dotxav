import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'jotai'

import App from './App.tsx'

import './styles/reset.css'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
