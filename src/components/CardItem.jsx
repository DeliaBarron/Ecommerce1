import { Link } from 'react-router-dom'
// Style
import '@/styles/CardItem.scss'
const CardItem = ({ description, image, price, product_name: productName, _id }) => {
  return (
    <div className='col-lg-3 col-md-6 col-sm-12 '>
      <button className='card__btn '>
        <Link className='card__link' to={`/Product/${_id}`}>
          <img src={image} className='card-img-top' alt='' />
          <div className='card__body text-dark'>
            <h5 className='card-title'>{productName}</h5>
            <p className='card-text'>{description}</p>
            <span className='card-text'>{`$${price}`}</span>
            {/* AQUI PONER LINK-react-router-dom <a href='#' className='btn btn-primary'>Go somewhere</a> */}
          </div>
        </Link>
      </button>

    </div>

  )
}

export default CardItem
