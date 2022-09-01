import axios from 'axios'

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'
const token = window.sessionStorage.getItem('token')
const header = {
  headers: { Authorization: `JWT ${token}` }
}
const SignedUpUser = (data) => axios.post(`${BASE_URL}/signup`, data)
const LogInUser = (data) => axios.post(`${BASE_URL}/login`, data)
const SingleUserReq = (id) => axios.get(`${BASE_URL}/user/${id})`, header)
export {
  SignedUpUser,
  LogInUser,
  SingleUserReq
}
