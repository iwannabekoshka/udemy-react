import React from 'react';
import styles from './UserList.module.css';
import UserItem from "../UserItem/UserItem";

const UserList = props => {
	const removeUserHandler = userObj => {
		props.onRemoveUser(userObj);
	}

	let content = <p>No users :(</p>;
	if (props.users.length !== 0) {
		content = props.users.map(user => {
			return (
				<UserItem
					key={user.id}
					user={user}
					onRemoveUser={removeUserHandler}
				/>
			)
		})
	}

	return (
		<ul className={styles['user-list']}>
			<h2 className={styles['user-title']}>Users</h2>
			{content}
		</ul>
	)
}

export default UserList;