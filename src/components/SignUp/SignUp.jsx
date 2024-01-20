import Input from "../Input/Input.jsx";
import classes from './SignUp.module.css'
import Button from "../Button/Button.jsx";
import PassInput from "../Input/PassInput.jsx";

export default function SignUp() {

    return (
        <div>
            <form name="signup" action="#" autoComplete="on">
                <Input name="name" iconName="person" placeholder="Name"/>
                <Input name="email" type="email" iconName="mail" placeholder="Email"/>
                <PassInput/>
                <div className={classes.centeredDiv}>
                    <Button type="submit" isActive={true} children="Register"/>
                </div>
            </form>
        </div>
    )
}