import classes from './PassInput.module.css'
import Input from "./Input.jsx";
import {useState} from "react";
export default function PassInput({name = 'password', placeholder = 'Password', iconName = 'lock'}) {
    const [visible, setVisible] = useState(false)

    return(
        <div>
            <Input name={name} type={visible? 'text' : 'password'} iconName={iconName} placeholder={placeholder}/>
            <input type="checkbox"  id="visable" checked={visible} onChange={e => {setVisible(e.target.checked)}}/>
            <label className={classes.show} htmlFor="visable">Show Password</label>
        </div>
    )
}