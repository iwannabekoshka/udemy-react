import React, {useState} from 'react';
import './App.css';
import UserAdd from "./components/UserAdd/UserAdd";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Modal/Modal";

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
	const [modalValues, setModalValues] = useState({});

	const removeUserHandler = userRemoved => {
		openModalHandler(userRemoved);

		setUsers((prevUsers) => {
			return prevUsers.filter(user => user.id !== userRemoved.id);
		})
	}
	const addUserHandler = user => {
		setUsers((prevUsers) => {
			return [user, ...prevUsers];
		})

		checkIfUserKoshka(user);
	}

	const openModalHandler = textObj => {
		setModalValues(textObj);
	}
	const closeModalHandler = event => {
		setModalValues({});
	}

	const checkIfUserKoshka = user => {
		if (user.name === 'Nastya' && user.age === '21') {
			openModalHandler({
				title: 'Congratulations!',
				text: 'You are the koshka!'
			})
		}
	}

	return (
		<div className="app">
			<UserAdd
				onAddUser={addUserHandler}
				onOpenModal={openModalHandler}
			/>
			<UserList
				users={users}
				onRemoveUser={removeUserHandler}
			/>
			<Modal
				text={modalValues}
				onCloseModale={closeModalHandler}
			/>
		</div>
	);
}

export default App;
