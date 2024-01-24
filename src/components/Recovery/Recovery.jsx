import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import classes from './Recovery.module.css';
import { useState } from 'react';

export default function Recovery({ onClick }) {
	const [warning, setWarning] = useState('');

	function checkValidation(e) {
		const email = e.target.email.value;

		if (!email.trim().length) {
			e.preventDefault();
			setWarning('Enter Email');
		} else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
			e.preventDefault();
			setWarning('Invalid Email');
		}
	}
	return (
		<div>
			<form action='' onSubmit={checkValidation}>
				<div>
					<Input
						warning={warning}
						type='email'
						name='email'
						placeholder='Email'
						iconName='email'
					/>
				</div>
				<div className={classes.containerDiv}>
					<Button isActive={true} children='Send' type='submit' />
				</div>
				<div className={classes.back}>
					<span onClick={onClick}>Back</span>
				</div>
			</form>
		</div>
	);
}
