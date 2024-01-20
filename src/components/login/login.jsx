import Input from "../input/input.jsx";
import styled from "styled-components";
import Button from "../button/Button.jsx";
import classes from './login.module.css'

const A = styled.a`
  text-decoration: none;
  color: #300b9a;
`

export default function Login() {

    return (
        <div>
            <form name="login" action="#" autoComplete="on">
                <Input name="email" type="email" iconName="email" placeholder="Email"/>
                <Input name="password" type="password" iconName="lock" placeholder="Password"/>
                <p>Lost password? <A href="#">Click here!</A></p>
                <div className={classes.centeredDiv}>
                    <Button children="Enter" isActive={true} type="submit"/>
                </div>
            </form>
        </div>
    )
}