import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Users = () => {
    const users = useSelector(state => state.users);

    return(
        <div className="container">
            <h2>Users</h2>
            <Table striped>
                <tbody>
                    <tr>
                        <td>Username</td>
                        <td>Name</td>
                    </tr>
                    {users.map(user =>
                        <tr key={user.id}>
                            <td>
                                { user.username }
                            </td>
                            <td>
                                { user.name }
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default Users;