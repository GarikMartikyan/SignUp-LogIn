import './App.css'
import Button from "./components/button/Button.jsx";
import SignUp from "./components/sign-up/sign-up.jsx";
import Login from "./components/login/login.jsx";
import {useState} from "react";

function App() {
    const [tab, setTab] = useState(true)

    return (
        <div className="container">
            <div className="innerContainer">
                <div>
                    <h2 className="header">
                        {tab? 'Sign Up' : 'Login'}
                    </h2>
                </div>

                {tab && <SignUp/>}
                {!tab && <Login/>}
                <div className='buttonContainer'>
                    <Button isActive={tab}
                            onClick={!tab? () => setTab(prv => !prv) : null}
                            type={tab? 'submit' : null}
                            form='signup'
                            children={'Sign Up'}/>

                    <Button isActive={!tab}
                            onClick={tab? () => setTab(prv => !prv) : null}
                            type={!tab? 'submit' : null}
                            form='login'
                            children={'Login'}/>
                </div>
            </div>
        </div>
    )
}

export default App
