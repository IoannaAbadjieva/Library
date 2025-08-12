import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './router/Routes'
import 'semantic-ui-css/semantic.min.css'
import { RouterProvider } from 'react-router-dom'
import './layout/styles.css'



createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
