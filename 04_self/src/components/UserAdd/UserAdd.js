import React, {useState} from 'react';
import styles from './UserAdd.module.css';

const UserAdd = props => {
	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');

	const validateForm = (userName, userAge) => {
		if ( !userName.trim() && !userAge.trim() ) {
			alert('Please, enter Your name and age.');
			return false;
		}
		if ( !userName.trim() ) {
			alert('Please, enter Your name.');
			return false;
		}
		if ( !userAge.trim() ) {
			alert('Please, enter Your age.');
			return false;
		}

		return true;
	}

	const changeNameHandler = event => {
		setUserName(event.target.value);
	}
	const changeAgeHandler = event => {
		setUserAge(event.target.value);
	}
	const addUserHandler = event => {
		event.preventDefault();

		validateForm(userName, userAge);
	}

	return (
		<form className={styles['user-add']} onSubmit={addUserHandler}>
			<label>
				<span>Username</span>
				<input
					type="text"
					value={userName}
					onChange={changeNameHandler}
				/>
			</label>
			<label>
				<span>Age</span>
				<input
					type="number"
					value={userAge}
					onChange={changeAgeHandler}
				/>
			</label>
			<button type="submit">Add User</button>
		</form>
	)
}

export default UserAdd;