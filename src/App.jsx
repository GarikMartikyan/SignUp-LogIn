import './App.css'
import Button from "./components/Button/Button.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Login from "./components/Login/Login.jsx";
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
                <div className='buttonContainer'>
                    <Button isActive={tab} onClick={!tab? () => setTab(prv => !prv) : null} children={'Sign Up'}/>
                    <Button isActive={!tab} onClick={tab? () => setTab(prv => !prv) : null} children={'Login'}/>
                </div>
                {tab && <SignUp/>}
                {!tab && <Login/>}
            </div>
        </div>
    )
}

export default App
