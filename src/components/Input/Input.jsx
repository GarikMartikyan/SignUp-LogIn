import classes from './Input.module.css';

export default function Input({ iconName, errMessage = false, ...props }) {
	let classContainer = classes.container;
	let classWarning = classes.warning;

	if (errMessage) {
		classContainer = `${classes.container} ${classes.noValid}`;
		classWarning = `${classes.warning} ${classes.visible}`;
	}

	return (
		<div className={classes.wrapper}>
			<div className={classContainer}>
				<div className={classes.icon}>
					<span className='material-symbols-outlined'>{iconName}</span>
				</div>
				<input {...props} />
			</div>
			<span className={classWarning}>
				{errMessage ? errMessage : 'No Warning'}
			</span>
		</div>
	);
}
