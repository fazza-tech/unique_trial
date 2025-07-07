import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Cart from './components/Cart.jsx'
import ProductDetail from './components/Productdetail.jsx'

const router = createBrowserRouter([
  {path:'/', element:<App/>},
  {path:'/cart' , element:<Cart/>},
  {path:'/product/:id', element:<ProductDetail/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
