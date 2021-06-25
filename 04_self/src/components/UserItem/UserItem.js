import React from 'react';
import styles from './UserItem.module.css';

const UserItem = props => {
	const removeUserHandler = event => {
		props.onRemoveUser(props.id)
	}

	return (
		<li
			className={styles['user-item']}
			onClick={removeUserHandler}
		>
			{props.name}, age: {props.age}
		</li>
	)
}

export default UserItem;