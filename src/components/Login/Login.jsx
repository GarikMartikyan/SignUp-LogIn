import Input from '../Input/Input.jsx';
import styled from 'styled-components';
import Button from '../Button/Button.jsx';
import classes from './Login.module.css';
import PassInput from '../Input/PassInput.jsx';

const A = styled.a`
	text-decoration: none;
	color: #300b9a;
`;

export default function Login() {
	function isValid(e) {
		const email = e.target.email.value;
		const password = e.target.password.value;
		const valid = email.trim().length || password.trim().length;

		if (!valid) e.preventDefault();
	}

	return (
		<div>
			<form name='login' action='#' autoComplete='on' onSubmit={isValid}>
				<Input name='email' type='email' iconName='email' placeholder='Email' />
				<PassInput />
				<p>
					Lost password? <A href='#'>Click here!</A>
				</p>
				<div className={classes.centeredDiv}>
					<Button children='Enter' isActive={true} type='submit' />
				</div>
			</form>
		</div>
	);
}
