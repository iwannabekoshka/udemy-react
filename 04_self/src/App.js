import React, {useState} from 'react';
import './App.css';
import UserAdd from "./components/UserAdd/UserAdd";
import UserList from "./components/UserList/UserList";

const USER_DATA = [
	{
		id: '1',
		name: 'Мать Тереза',
		age: '24'
	},
	{
		id: '2',
		name: 'Халк',
		age: '21'
	}
];

function App() {
	const [users, setUsers] = useState(USER_DATA);

	const removeUserHandler = id => {
		setUsers((prevUsers) => {
			return prevUsers.filter(user => user.id !== id);
		})
	}
	const addUserHandler = user => {
		setUsers((prevUsers) => {
			return [user,...prevUsers];
		})
	}

	return (
		<div className="app">
			<UserAdd
				onAddUser={addUserHandler}
			/>
			<UserList
				users={users}
				onRemoveUser={removeUserHandler}
			/>
		</div>
	);
}

export default App;
