import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
// Context
import { useItemsContext } from '../context/ItemsContext'
import { useAuthContext } from '@/context/AuthContext'
// Style
import '@/styles/ItemDetails.scss'

const ItemDetails = () => {
  const { itemsApiArr } = useItemsContext()
  const { isAuth } = useAuthContext()
  const { id } = useParams()
  // console.log(id)// aqui ya tengo mi id seleccionado asi que con esto ya le puedo decir a itemsDetails que pintar de este elemento que ya trae
  const [elementSelected, setElementSelected] = useState({
    product_name: '',
    description: '',
    price: '',
    image: ''
  })
  useEffect(() => {
    const selected = itemsApiArr.filter(item => id === item._id)
    setElementSelected(selected[0])
  }, [])

  return (

    <div className='container'>
      <div className='row item-page m-1'>
        <div className='col-lg-6 col-md-6 col-sm-12 item-details__img'>
          <img className='img-fluid' src={elementSelected.image} alt='' />
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 item-details__details'>
          <h3 className='item-details__itemName'>{elementSelected.product_name}</h3><hr />
          <p className='item-details__description'>{elementSelected.description}</p>
          <p className='item-details__price'>{`$${elementSelected.price}.00`}</p>
          <button className='item-details__btn-buy px-4 py-2 ' type='button' data-bs-toggle='modal' data-bs-target='#modal-BuyBtn'><i className='bi bi-bag-fill' />Add to cart</button>
          <div className='modal fade' id='modal-BuyBtn'>
            <div className='modal-dialog modal-sm'>
              <div className='modal-content p-3'>
                {
                  isAuth
                    ? <p>is true</p>
                    : <p>Create an account and/or logIn to buy</p>
                }
              </div>
            </div>
          </div>
          <div className='item-details__datepicker'>
            <label htmlfor='date'>Select a date for Delivery</label>
            <input id='startDate' className='form-control' type='date' />

          </div>
        </div>
      </div>
      <div className='row m-4 '>
        <button className='item-details__btn-back-home '>
          <Link className='item-details__link-home' to='/'>Back 2 Home</Link>
        </button>

      </div>
    </div>
  )
}

export default ItemDetails
