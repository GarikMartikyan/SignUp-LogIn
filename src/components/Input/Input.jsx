import classes from './Input.module.css';

export default function Input({
	name,
	type = 'text',
	placeholder,
	iconName,
	warning,
	...props
}) {
	let classContainer = classes.container;
	let classWarning = classes.warning;

	if (warning) {
		classContainer = `${classes.container} ${classes.noValid}`;
		classWarning = `${classes.warning} ${classes.visible}`;
	}

	return (
		<div className={classes.wrapper}>
			<div className={classContainer}>
				<div className={classes.icon}>
					<span className='material-symbols-outlined'>{iconName}</span>
				</div>
				<input
					id={name}
					name={name}
					type={type}
					placeholder={placeholder}
					{...props}
				/>
			</div>
			<span className={classWarning}>{warning ? warning : 'No Warning'}</span>
		</div>
	);
}
