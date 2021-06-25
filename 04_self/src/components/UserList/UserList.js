import React, {useState} from 'react';
import styles from './UserList.module.css';

const UserList = props => {
	return (
		<ul className={styles['user-list']}>
			<li>Lorem ipsum dolor sit amet.</li>
			<li>Lorem ipsum dolor.</li>
		</ul>
	)
}

export default UserList;