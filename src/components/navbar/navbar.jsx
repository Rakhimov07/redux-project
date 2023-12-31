import {Link} from 'react-router-dom'
import {logo} from '../../config/constants'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../slice/auth'
import { removeItem } from '../../helpers'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'

import { useState } from 'react'


const Navbar = () => {
	const {loggedIn,user} = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const [menu,setMenu] = useState(false)
	const logoutHandle = () => {
		removeItem('token')
		dispatch(logoutUser())
	}
	return (
		<div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3'>
		<Link to={'/'}>
			<img src={logo} alt='' />
		</Link>

		<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
			{loggedIn ? (
				<>
					<p className='me-3 py-2 m-0 text-dark text-decoration-none'>{user.username}</p>
					<button className='btn btn-outline-danger'>Logout</button>
				</>
			) : (
				<>
					<Link className='me-3 py-2 text-dark text-decoration-none' to={'/login'}>
						Login
					</Link>
					<Link className='me-3 py-2 text-dark text-decoration-none' to={'/register'}>
						Register
					</Link>
				</>
			)}
		</nav>
	</div>
	)
}

export default Navbar