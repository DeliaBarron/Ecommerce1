// import useApi from '../hooks/useApi'
import { useItemsContext } from '../context/ItemsContext'
import CardItem from './CardItem'

const Items = () => {
  // const { itemsApiArr } = useApi()
  // console.log(itemsApiArr)
  const context = useItemsContext()

  return (
    <div className='container-fluid'>
      <div className='row'>
        {context.loading
          ? <h1>Loading...</h1>
          : context.itemsApiArr.filter(item => {
            if (context.query === '') {
              return item
            } else if (item.product_name.toLowerCase().includes(context.query.toLowerCase())) {
              return item
            }
            return null
          }).map((item, id) => (
            <CardItem key={id} {...item} />
          )

          )}

      </div>

    </div>
  )
}

export default Items
