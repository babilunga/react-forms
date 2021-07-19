import React from 'react';
import './style.css';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			repeatPassword: '',
		};
	}

	onSubmit = (event) => {
		event.preventDefault();
		console.log(
			`username: ${this.username.value},\npassword: ${this.password.value},\nrepeat password: ${this.repeatPassword.value}`
		);
	};

	onChangeInput = (event) => {
		console.log(`name: ${event.target.name}, value: ${event.target.value}`);
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<div className='form-container'>
				<form className='form'>
					<div className='form-group'>
						<label>Username</label>
						<input
							type='text'
							className='form-control'
							placeholder='Enter username'
							ref={(node) => (this.username = node)}
							name='username'
							value={this.state.username}
							onChange={this.onChangeInput}
						/>
					</div>
					<div className='form-group'>
						<label>Password</label>
						<input
							type='text'
							className='form-control'
							placeholder='Enter password'
							ref={(node) => (this.password = node)}
							name='password'
							value={this.state.password}
							onChange={this.onChangeInput}
						/>
					</div>
					<div className='form-group'>
						<label>Repeat password</label>
						<input
							type='text'
							className='form-control'
							placeholder='Repeat password'
							ref={(node) => (this.repeatPassword = node)}
							name='repeatPassword'
							value={this.state.repeatPassword}
							onChange={this.onChangeInput}
						/>
					</div>
					<button type='submit' className='btn' onClick={this.onSubmit}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}
