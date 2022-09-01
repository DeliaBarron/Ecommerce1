import axios from 'axios'

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/item'

export const getItems = async () => {
  return await axios.get(`${BASE_URL}`)
}
// const getItems = () => axios.get(`${BASE_URL}`)
// const getItem = (id) => axios.get(`${BASE_URL}/id`)
