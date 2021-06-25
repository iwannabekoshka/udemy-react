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
	const [modalVisible, setModalVisible] = useState(false);
	const [modalText, setModalText] = useState('');

	const removeUserHandler = id => {
		setUsers((prevUsers) => {
			return prevUsers.filter(user => user.id !== id);
		})
	}
	const addUserHandler = user => {
		setUsers((prevUsers) => {
			return [user, ...prevUsers];
		})
	}
	const openModalHandler = text => {
		setModalText(text);
		switchModalHandler();
	}
	const switchModalHandler = event => {
		setModalVisible((prev) => {
			return !prev;
		});
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
				visible={modalVisible}
				text={modalText}
				onCloseModale={switchModalHandler}
			/>
		</div>
	);
}

export default App;
