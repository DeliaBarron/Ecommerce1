// Hooks
import useForm from '@/hooks/useForm'
import { useNavigate } from 'react-router-dom'
// API URL SignUp
import { SignedUpUser } from '@/services/userServices'

// Style
import '@/styles/SignUp.scss'

const SignUp = () => {
  const navigate = useNavigate()
  const sendData = async (data) => {
    // console.log(data)
    try {
      const result = await SignedUpUser(data)
      if (result.status === 200) {
        navigate('/LogIn')
      }
    } catch (error) {
      // eslint-disable-next-line no-undef
      alert('Verifique los datos, es posible que un usuario ya este registrado con estos datos: ' + error.message)
    }
  }
  const { input, handleInputChange, handleSubmit } = useForm(sendData, { // estos son los defaults que recibe el hook
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birth_date: '',
    gender: 'Select a gender'
  })
  return (

    <div className='mt-3 signup signup__container'>
      <form action='' className='signup__form'>
        <input className='signup__input' type='text' name='first_name' value={input.first_name} onChange={handleInputChange} placeholder='Name' />
        <input className='signup__input' type='text' name='last_name' value={input.last_name} onChange={handleInputChange} placeholder='Last Name' />
        <input className='signup__input' type='text' name='email' value={input.email} onChange={handleInputChange} placeholder='Email' />
        <input className='signup__input' type='text' name='password' value={input.password} onChange={handleInputChange} placeholder='Password' />
        <label className='signup__birthLabel'>Birthdate:
          <input className='signup__birthdateInput ms-2' type='date' name='birth_date' value={input.birth_date} onChange={handleInputChange} />
        </label>

        <label className='signup__genderLabel'>Gender:
          <select className='signup__genderSelect ms-2' name='gender' value={input.gender} onChange={handleInputChange}>
            <option value='Select a gender' disabled>Select a gender</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
        </label>

        <button type='button' className='signup__btn-signup' onClick={handleSubmit}>
          send
        </button>
      </form>
    </div>
  )
}

export default SignUp
