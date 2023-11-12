import { useState } from "react"
import { icon } from "../../config/constants"
import {Input} from '../../ui/index'
import {signUserFailure,signUserStart,signUserSuccess} from '../../slice/auth'
import { useDispatch, useSelector } from "react-redux"
import { AuthService } from "../../services/auth"
import ValidationErrors from "../validation-errors/validation-errors"
import { useNavigate } from "react-router-dom"

const Register = () => {
	const {isLoading,error} = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const Navigation = useNavigate()

	const registerHandle = async(e) => {
		e.preventDefault()
		dispatch(signUserStart())
		const user = {username: name, email, password}
		try {
			const response = await AuthService.userRegister(user)
			dispatch(signUserSuccess(response.user))
			Navigation('/')
		} catch (error) {
			dispatch(signUserFailure(error.response.data.errors))
		}
		
	}
  return (
    <div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form>
					<img className='mb-2' src={icon} alt='Icon' width='72' height='60' />
					<h1 className='h3 mb-3 fw-normal'>Please Register</h1>
                    {error && <ValidationErrors/>}
					<Input label={'Name'} state={name} setState={setName} />
					<Input label={'Email address'} state={email}  setState={setEmail} />
					<Input label={'Password'} type={'password'} state={password} setState={setPassword} />

					<button disabled={isLoading} onClick={registerHandle} className='w-100 btn btn-lg btn-primary mt-2' type='submit'>
						{isLoading ? 'Loading' : 'Register'}
					</button>
				</form>
			</main>
		</div>
  )
}

export default Register