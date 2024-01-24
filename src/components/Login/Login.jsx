import Input from '../Input/Input.jsx';
import styled from 'styled-components';
import Button from '../Button/Button.jsx';
import classes from './Login.module.css';
import PassInput from '../Input/PassInput.jsx';
import { useState } from 'react';

const A = styled.a`
	text-decoration: none;
	color: #300b9a;
`;

export default function Login() {
	const [warning, setWarning] = useState(false);
	function isValid(e) {
		const email = e.target.email.value;
		const password = e.target.password.value;
		if (
			!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) &&
			password.trim().length < 6
		) {
			e.preventDefault();
			setWarning(true);
		}
	}
	const warningAlert = <p className={classes.warning}>Wrong email or password</p>;

	return (
		<div>
			{warning && warningAlert}
			<form name='login' action='' autoComplete='on' onSubmit={isValid} method='post'>
				<Input name='email' type='email' iconName='email' placeholder='Email' />
				<PassInput name='password' placeholder='Password' />
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
