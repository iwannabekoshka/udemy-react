import React from 'react';
import styles from './Login.module.css';

const Login = props => {
	const loginHandler = event => {
		event.preventDefault();
		props.onLogin();
	}

	return (
		<form className={styles['login-form']} onSubmit={loginHandler}>
			<label>Email: </label>
			<input type="email"/>

			<label>Password: </label>
			<input type="password"/>

			<button type="submit">Log in</button>
		</form>
	)
}

export default Login;