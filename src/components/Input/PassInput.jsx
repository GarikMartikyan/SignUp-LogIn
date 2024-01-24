import classes from './PassInput.module.css';
import Input from './Input.jsx';
import { useState } from 'react';

export default function PassInput({ iconName = 'lock', ...props }) {
	const [visible, setVisible] = useState(false);

	return (
		<div>
			<Input
				{...props}
				type={visible ? 'text' : 'password'}
				iconName={iconName}
			/>
			<input
				type='checkbox'
				id='visable'
				checked={visible}
				onChange={e => {
					setVisible(e.target.checked);
				}}
			/>
			<label className={classes.show} htmlFor='visable'>
				Show Password
			</label>
		</div>
	);
}
