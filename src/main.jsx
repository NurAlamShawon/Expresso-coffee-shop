import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ValueContext } from './Context/ValueContext.jsx'
import { RouterProvider } from 'react-router'
import router from './Routes/Routeprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<ValueContext>
  <RouterProvider router={router}></RouterProvider>
</ValueContext>
  </StrictMode>,
)
