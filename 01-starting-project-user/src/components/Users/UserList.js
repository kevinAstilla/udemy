import React from 'react';
import style from './UserList.module.css';

// Components
import User from './User';

// UI
import Card from '../UI/Card';

const Users = (props) => {
    if (props.users.length === 0) {
        return;
    }
    return(
        <Card className={`${style.users}`}>
            <ul>
                {props.users.map((user) => (
                    <User
                        key={user.id} 
                        username={user.username}
                        year={user.year}
                    />
                ))}
            </ul>
        </Card>
    );
}

export default Users;