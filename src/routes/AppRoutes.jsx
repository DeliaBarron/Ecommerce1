import { Route, Routes } from 'react-router-dom'
// Pages
import Home from '@/pages/Home'
import LogIn from '@/pages/LogIn'
import Product from '../pages/Product'
import SignUp from '../pages/SignUp'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/LogIn' element={<LogIn />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/Product/:id' element={<Product />} />
    </Routes>
  )
}

export default AppRoutes
