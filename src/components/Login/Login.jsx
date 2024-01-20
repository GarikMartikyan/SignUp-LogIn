import Input from "../Input/Input.jsx";
import styled from "styled-components";
import Button from "../Button/Button.jsx";
import classes from './Login.module.css'
import PassInput from "../Input/PassInput.jsx";

const A = styled.a`
  text-decoration: none;
  color: #300b9a;
`

export default function Login() {

    return (
        <div>
            <form name="login" action="#" autoComplete="on">
                <Input name="email" type="email" iconName="email" placeholder="Email"/>
                <PassInput/>
                <p>Lost password? <A href="#">Click here!</A></p>
                <div className={classes.centeredDiv}>
                    <Button children="Enter" isActive={true} type="submit"/>
                </div>
            </form>
        </div>
    )
}