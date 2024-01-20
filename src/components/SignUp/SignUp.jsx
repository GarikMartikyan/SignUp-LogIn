import Input from '../Input/Input.jsx';
import classes from './SignUp.module.css';
import Button from '../Button/Button.jsx';
import PassInput from '../Input/PassInput.jsx';

export default function SignUp() {
	function isValid(e) {
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const valid =
			name.trim().length || email.trim().length || password.trim().length;
		if (!valid) e.preventDefault();
	}

	return (
		<div>
			<form name='signup' action='#' autoComplete='on' onSubmit={isValid}>
				<Input name='name' iconName='person' placeholder='Name' />
				<Input name='email' type='email' iconName='mail' placeholder='Email' />
				<PassInput />
				<div className={classes.centeredDiv}>
					<Button type='submit' isActive={true} children='Register' />
				</div>
			</form>
		</div>
	);
}
