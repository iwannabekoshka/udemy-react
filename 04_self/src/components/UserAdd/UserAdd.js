import React, {useState} from 'react';
import styles from './UserAdd.module.css';

const UserAdd = props => {
	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');

	const validateForm = (userName, userAge) => {
		if ( !userName.trim() && !userAge.trim() ) {
			props.onOpenModal({
				title: 'Invalid input',
				text: 'Please, enter User name and age.'
			});
			return false;
		}
		if ( !userName.trim() ) {
			props.onOpenModal({
				title: 'Invalid input',
				text: 'Please, enter User name.'
			});
			return false;
		}
		if ( !userAge.trim() ) {
			props.onOpenModal('Please, enter User age.');
			props.onOpenModal({
				title: 'Invalid input',
				text: 'Please, enter User age.'
			});
			return false;
		}
		if (+userAge < 0) {
			props.onOpenModal(`Age shouldn't be below zero.`);
			props.onOpenModal({
				title: 'Invalid input',
				text: `Age shouldn't be below zero.`
			});
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

		if ( !validateForm(userName, userAge) ) return;

		const userObj = {
			id: Math.random().toString(),
			name: userName,
			age: userAge
		}
		props.onAddUser(userObj);

		setUserName('');
		setUserAge('');
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
				<span>Age (years)</span>
				<input
					type="number"
					value={userAge}
					onChange={changeAgeHandler}
				/>
			</label>
			<button
				className='button'
				type="submit"
			>
				Add User
			</button>
		</form>
	)
}

export default UserAdd;