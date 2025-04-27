import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import { store } from './store/index.js'
import { RouterProvider } from 'react-router-dom'
import router from './router/AppRoutes.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <ToastContainer />
    <Provider store={store} >
    <RouterProvider router={router} />
    </Provider>
    </>
  </StrictMode>,
)
