import React from 'react';

const User = (props) => {
    return (
        <li>{`${props.username} (${props.year} years old)`}</li>
    );
}

export default User;