// import { getItems } from '../services/getItems'
// import { useEffect, useState } from 'react'

// const useApi = () => {
//   const [itemsApiArr, setItemsApiArr] = useState([])

//   const getApiData = async () => {
//     const apiData = await getItems()
//     if (apiData.status === 200) {
//       setItemsApiArr(apiData.data)
//     } else {
//       console.error('no hay Api info')
//     }
//   }

//   useEffect(() => {
//     getApiData()
//   }, [])
//   return { itemsApiArr }
// }
// export default useApi
