import './App.css';
import Button from './components/Button/Button.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Login from './components/Login/Login.jsx';
import { useState } from 'react';
import Recovery from './components/Recovery/Recovery.jsx';

function App() {
	const [tab, setTab] = useState('sign_up');

	return (
		<div className='container'>
			<div className='innerContainer'>
				<div>
					<h2 className='header'>
						{tab === 'sign_up' ? 'Sign Up' : null}
						{tab === 'log_in' ? 'Login' : null}
						{tab === 'recovery' ? 'Forgot your password?' : null}
					</h2>
				</div>
				{tab !== 'recovery' && (
					<div className='buttonContainer'>
						<Button
							isActive={tab === 'sign_up'}
							onClick={tab !== 'sign_up' ? () => setTab('sign_up') : null}
							children={'Sign Up'}
						/>
						<Button
							isActive={tab === 'log_in'}
							onClick={tab !== 'log_in' ? () => setTab('log_in') : null}
							children={'Login'}
						/>
					</div>
				)}
				{tab === 'sign_up' && <SignUp />}
				{tab === 'log_in' && <Login onClick={() => setTab('recovery')} />}
				{tab === 'recovery' && <Recovery onClick={() => setTab('log_in')} />}
			</div>
		</div>
	);
}

export default App;
