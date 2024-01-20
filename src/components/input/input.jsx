import classes from './input.module.css'
import {useState} from "react";
export default function Input({iconName, placeholder, type = 'text', name = ''}) {
    const [valid, setValid] = useState(true)
    const isvalid = valid? `${classes.container}` : `${classes.container} ${classes.noValid}`;
    return (
        <div className={isvalid}>
            <div className={classes.icon}>
                <span className="material-symbols-outlined">{iconName}</span>
            </div>
            <input name={name} type={type} placeholder={placeholder} onChange={e => setValid(e.target.value.trim().length)}/>
        </div>
    )
}