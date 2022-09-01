// Styles
import '@/styles/Navbar.scss'
import { Link, useLocation } from 'react-router-dom'

// Context
import { useItemsContext } from '../context/ItemsContext'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
const Navbar = () => {
  const { isAuth, logOut, userData } = useAuthContext()
  // States
  const [isLocation, setIsLocation] = useState(false)

  const location = useLocation()

  const path = () => {
    if (location.pathname !== '/LogIn' && location.pathname !== '/SignUp') {
      setIsLocation(true)
    } else {
      setIsLocation(false)
    }
  }
  useEffect(() => {
    path()
  }, [location])

  const context = useItemsContext()
  const handleQuery = (event) => {
    context.setQuery(event.target.value)
    console.log(context.query)
  }

  return (
    <nav className='navbar navbar-expand-lg '>
      <div className='container-fluid justify-content-start navbar__container'>
        <Link className='navbar__brand' to='/'>O-Shop</Link>
        <ul className='navbar-nav'>
          {/* <li className='nav-item disable'>
            <Link className='navbar__link mx-3 ' aria-current='page' to='/'>Category</Link>
          </li> */}

          {
            isLocation
              ? (
                <form role='search'>
                  <input className='navbar__searchinput ms-4' type='search' id='search' placeholder='Search item...' aria-label='Search' onChange={handleQuery} />
                </form>
                )
              : <span />

          }

        </ul>

      </div>
      <div className='nav-item container mx-2 justify-content-end'>
        <div>
          <h4>{`HOla:${userData}`}</h4>
        </div>
        {
          isAuth
            ? (

              <button onClick={logOut} className='navbar__btn-logout me-2'>
                <Link className='navbar__link-login' to='/LogIn'>LogOut</Link>
              </button>
              )
            : (
              <button className='navbar__btn-login me-2'>
                <Link className='navbar__link-login' to='/LogIn'>LogIn</Link>
              </button>
              )
        }
        <button className='navbar__btn-login'>
          <Link className='navbar__link-login' to='/SignUp'>SignUp</Link>
        </button>

      </div>
    </nav>

  )
}

export default Navbar
