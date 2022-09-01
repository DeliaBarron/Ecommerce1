// Styles
import '@/styles/LogIn.scss'
// Hooks
import useForm from '@/hooks/useForm'
import { useNavigate } from 'react-router-dom'
// API user Login URL
import { LogInUser } from '@/services/userServices'
// Context
import { useAuthContext } from '../context/AuthContext'

const LogIn = () => {
  const { LoggedInUser } = useAuthContext()
  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const result = await LogInUser(data)
      if (result.status === 200) {
        navigate('/')
        LoggedInUser(result.data.token)
      }
    } catch (error) {
      // eslint-disable-next-line no-undef
      alert('You need to sign up before logging in')
    }
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    email: '',
    password: ''
  })
  return (
    <div className='mt-3 login login__container'>
      <form action='' className='login__form'>
        <input className='login__input' type='text' name='email' value={input.email} onChange={handleInputChange} placeholder='Email' />
        <input className='login__input' type='text' name='password' value={input.password} onChange={handleInputChange} placeholder='Password' />
        <button type='button' className='login__btn-login' onClick={handleSubmit}>
          LogIn
        </button>
      </form>
    </div>
  )
}

export default LogIn
