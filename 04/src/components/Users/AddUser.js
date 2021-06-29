import React, {useState} from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card'
import Button from '../UI/Button.js';
import Modal from "../UI/Modal";

const AddUser = props => {
	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');
	const [message, setMessage] = useState();

	const hideModalHandler = event => {
		setMessage(null);
	}

	const changeUsernameHandler = event => {
		setUsername(event.target.value);
	}
	const changeAgeHandler = event => {
		setAge(event.target.value);
	}

	const validateForm = () => {
		if ( username.trim().length === 0 || age.trim().length === 0 ) {
			setMessage({
				title: 'Invalid input',
				message: 'Enter a valid name and age'
			})
			return false;
		}
		if ( age.trim().length !== 0 && +age < 1 ) {
			setMessage({
				title: 'Invalid input',
				message: 'Enter a valid age'
			})
			return false;
		}

		return true;
	}

	const addUserHandler = event => {
		event.preventDefault();

		if ( !validateForm() ) return;

		props.onAddUser({
			id: Date.now().toString(),
			name: username,
			age: age
		})

		setUsername('');
		setAge('');
	}

	return (
		<React.Fragment>
			{message &&
				<Modal
					title={message.title}
					message={message.message}
					onHideModal={hideModalHandler}
				/>
			}

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
		</React.Fragment>
	)
}

export default AddUser;