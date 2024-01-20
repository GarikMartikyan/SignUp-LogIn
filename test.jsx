import React from 'react';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form submitted with values:', this.state);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} id="myForm">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

class App extends React.Component {
    handleButtonClick = () => {
        // Use the form's submit method to trigger form submission
        const form = document.getElementById('myForm');
        if (form) {
            form.submit();
        }
    };

    render() {
        return (
            <div>
                <MyForm />
                <button type="button" onClick={this.handleButtonClick} form="myForm">
                    Submit Form
                </button>
            </div>
        );
    }
}

export default App;
