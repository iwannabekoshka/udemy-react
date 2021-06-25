import './App.css';
import UserAdd from "./components/UserAdd/UserAdd";
import UserList from "./components/UserList/UserList";

function App() {
	return (
		<div className="app">
			<UserAdd />
			<UserList />
		</div>
	);
}

export default App;
