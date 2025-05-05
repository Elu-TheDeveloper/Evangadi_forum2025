import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {BrowserRouter} from 'react-router-dom'
import AuthProvider from './Pages/Auth/Auth.jsx'
import Layout from './Pages/Layout/Layout.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<BrowserRouter>
<Layout>
<App />
</Layout>
    </BrowserRouter>
</AuthProvider>
  </StrictMode>,
)
