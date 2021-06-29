import React, {useState} from 'react';
import './index.css';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const USERS = [
  {
    id: 1,
    name: 'Koshka',
    age: '21'
  },
  {
    id: 2,
    name: 'Kartoshka',
    age: 24
  }
]

function App() {
  const [users, setUsers] = useState(USERS);

  const addUserHandler = (newUser) => {
    setUsers((prev) => {
      return [...prev, newUser]
    })
  }

  return (
    <React.Fragment>
      <AddUser
        onAddUser={addUserHandler}
      />
      <UsersList users={users}/>
    </React.Fragment>
  );
}

export default App;
