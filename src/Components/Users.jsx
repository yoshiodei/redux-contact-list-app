import React from 'react';
import Form from './Form';
import UsersList from './UsersList';

const Users = () => {
    return (
        <div className="main">
            <Form />
            <h2>Contact List</h2>
            <UsersList />
        </div>
    );
}

export default Users;
