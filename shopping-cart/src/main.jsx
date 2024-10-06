import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'

import './index.css'
import './App.css'

/** PLAN
 * - shopping cart:
 *  -- total money
 *  -- choosen articles and their count
 *  --> perhaps a state array to which we can add purchase objects
 * 
 * - page switching
 *  -- put pages as components and switch them using a view state
 *  -- or probably add router to have separate pages and switching ?
 *  ---- see if states are preserved and kept between routed pages
 *  ---- otherwise perhaps try with 'local' storage
 *  ---- (although usually cards are stored on server etc. etc.)
 * 
 * - fetch items to sell using API
 * -- for instance with https://fakestoreapi.com/
 */


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: "shop",
    element: <Shop />
  },
  {
    path: "checkout",
    element: <Cart />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
