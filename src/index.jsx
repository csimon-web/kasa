import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import NoMatch from './pages/NoMatch'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: 'a-propos',
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: 'logement/:id',
    element: (
      <>
        <Header />
        <Housing />
        <Footer />
      </>
    ),
  },
  {
    path: '*',
    element: (
      <>
        <Header />
        <NoMatch />
        <Footer />
      </>
    ),
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
