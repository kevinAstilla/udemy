import React, {useReducer, useState} from 'react';
import NewUser from './components/NewUser/NewUser';
import UserList from './components/Users/UserList';


function App() {
  const[users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((previousUser) => {
      return [newUser,...previousUser]
    });

    console.log(users);
  };
  return (
    <React.Fragment>
        <NewUser onSaveUserData={addUserHandler}/>

        <UserList
          users={users}
        />
    </React.Fragment>
  );
}

export default App;
