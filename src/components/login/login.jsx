import Input from "../input/input.jsx";
import styled from "styled-components";

const A = styled.a`
  text-decoration: none;
  color: #300b9a;
`

export default function Login() {

    return (
        <div>
            <form name="login" action="#" autoComplete="on" target="_blank">
                <Input name="email" type="email" iconName="email" placeholder="Email"/>
                <Input name="password" type="password" iconName="lock" placeholder="Password"/>
            </form>
            <p>Lost password? <A href="#">Click here!</A></p>
        </div>
    )
}