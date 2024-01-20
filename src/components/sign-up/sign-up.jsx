import Input from "../input/input.jsx";
import classes from './sign-up.module.css'
import {useState} from "react";

export default function SignUp() {
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <form name="signup" action="#" autoComplete="on" target="_blank">
                <Input name="name" iconName="person" placeholder="Name"/>
                <Input name="email" type="email" iconName="mail" placeholder="Email"/>
                <Input name="password" type={visible? 'text' : 'password'} iconName="lock" placeholder="Password"/>
                <input type="checkbox"  id="visable" checked={visible} onChange={e => {setVisible(e.target.checked)}}/>
                <label className={classes.show} htmlFor="visable">Show Password</label>
            </form>
        </div>
    )
}