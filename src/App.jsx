import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

// ROUTER-DOM
import { BrowserRouter } from 'react-router-dom'
import { ItemsProvider } from './context/ItemsContext'
import { AuthProvider } from '@/context/AuthContext'

function App () {
  // console.log(useApi())
  return (
    <BrowserRouter>
      <ItemsProvider>
        <section className='container-fluid'>
          <AuthProvider>
            <Navbar />
            <AppRoutes />
          </AuthProvider>
        </section>
      </ItemsProvider>
    </BrowserRouter>

  )
}

export default App
