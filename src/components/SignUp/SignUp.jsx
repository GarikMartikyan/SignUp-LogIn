import Input from '../Input/Input.jsx';
import classes from './SignUp.module.css';
import Button from '../Button/Button.jsx';
import PassInput from '../Input/PassInput.jsx';
import { useReducer } from 'react';
import reducer from './SignUpReducer.js';

export default function SignUp() {
	const [warnings, dispatch] = useReducer(reducer, {
		name: '',
		email: '',
		password: ''
	});

	function isValid(e) {
		let { name, email, password } = e.target;
		[name, email, password] = [name.value, email.value, password.value];

		let isFormValid = true;

		//Name Check
		if (!name.trim().length) {
			isFormValid = false;
			dispatch({ field: 'name', payload: 'Name Required' });
		} else {
			dispatch({ field: 'name', payload: '' });
		}
		//Email Check
		if (!email.trim().length) {
			isFormValid = false;
			dispatch({ field: 'email', payload: 'Email Required' });
		} else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
			isFormValid = false;
			dispatch({ field: 'email', payload: 'Invalid Email' });
		} else {
			dispatch({ field: 'email', payload: '' });
		}
		//Password Check
		if (!password.trim().length) {
			isFormValid = false;
			dispatch({ field: 'password', payload: 'Password Required' });
		} else if (password.trim().length < 6) {
			isFormValid = false;
			dispatch({
				field: 'password',
				payload: 'Password length must be 6 characters or more'
			});
		} else {
			dispatch({ field: 'password', payload: '' });
		}
		//In Case Of Invalid Form
		if (!isFormValid) e.preventDefault();
	}

	return (
		<div>
			<form name='sign_up' action='' autoComplete='on' onSubmit={isValid} method='post'>
				<Input warning={warnings.name} name='name' iconName='person' placeholder='Name' />
				<Input
					warning={warnings.email}
					name='email'
					type='text'
					iconName='mail'
					placeholder='Email'
				/>
				<PassInput warning={warnings.password} name='password' placeholder='Password' />
				<div className={classes.centeredDiv}>
					<Button type='submit' isActive={true} children='Register' />
				</div>
			</form>
		</div>
	);
}
