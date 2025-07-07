import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'

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
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
  </StrictMode>,
)
