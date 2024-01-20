import classes from './Button.module.css'
export default function Button({children = 'Click', isActive = null, ...props}) {
        const btnClass = isActive? `${classes.button} ${classes.active}`: `${classes.button}`;
        return(
            <button {...props} className={btnClass}>{children}</button>
        )
}