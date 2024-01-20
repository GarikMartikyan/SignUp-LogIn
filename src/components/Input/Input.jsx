import classes from './Input.module.css'
import {useState} from "react";
export default function Input({iconName, placeholder, type = 'text', name = ''}) {
    const [valid, setValid] = useState(true)
    const isValid = valid? `${classes.container}` : `${classes.container} ${classes.noValid}`;
    return (
        <div className={isValid}>
            <div className={classes.icon}>
                <span className="material-symbols-outlined">{iconName}</span>
            </div>
            <input name={name} type={type} placeholder={placeholder} onChange={e => setValid(e.target.value.trim().length)}/>
        </div>
    )
}