import { createContext, useContext, useEffect, useState } from 'react'
import { getItems } from '../services/getItems'

const ItemsContext = createContext()

function ItemsProvider (props) {
  const [itemsApiArr, setItemsApiArr] = useState([])
  const [loading, setLoading] = useState(false)

  const [query, setQuery] = useState('')

  const getApiData = async () => {
    const apiData = await getItems()
    if (apiData.status === 200) {
      setItemsApiArr(apiData.data)
      // console.log(itemsApiArr)
    } else {
      setLoading(true)
    }
  }
  useEffect(() => {
    getApiData()
  }, [])

  const value = {
    itemsApiArr,
    loading,
    query,
    setQuery

  }

  return (
    <ItemsContext.Provider value={value} {...props} />
  )
}

const useItemsContext = () => {
  const context = useContext(ItemsContext)
  return context
}

export {
  ItemsProvider,
  useItemsContext
}
