import React from 'react';
import styles from './UserItem.module.css';

const UserItem = props => {
	const removeUserHandler = event => {
		props.onRemoveUser({
			id: props.user.id,
			title: `You're monster!`,
			text: `You have deleted ${props.user.name}! It was only ${props.user.age} years old... :(`
		})
	}

	return (
		<li
			className={styles['user-item']}
			onClick={removeUserHandler}
		>
			{props.user.name}, age: {props.user.age}
		</li>
	)
}

export default UserItem;