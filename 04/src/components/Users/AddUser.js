import React, {useState} from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card'
import Button from '../UI/Button.js';

const AddUser = props => {
	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');

	const changeUsernameHandler = event => {
		setUsername(event.target.value);
	}
	const changeAgeHandler = event => {
		setAge(event.target.value);
	}

	const validateForm = () => {
		if ( username.trim().length === 0 || age.trim().length === 0 ) {
			alert('Fill all fields');
			return false;
		}
		if ( age.trim().length !== 0 && +age < 1 ) {
			alert('Age is not valid');
			return false;
		}

		return true;
	}

	const addUserHandler = event => {
		event.preventDefault();

		if ( !validateForm() ) return;

		setUsername('');
		setAge('');
	}

	return (
		<Card className={styles['input']}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					type="text"
					value={username}
					onChange={changeUsernameHandler}
				/>

				<label htmlFor="age">Age (years)</label>
				<input
					id="age"
					type="number"
					value={age}
					onChange={changeAgeHandler}
				/>

				<Button type="submit">Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser;