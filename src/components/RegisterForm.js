import React from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../reducers/userReducer';
import { useNavigate } from 'react-router-dom';

import userService from '../../services/users';
import { createNotification } from '../../reducers/notificationReducer';


const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addUser = async(event) => {
        event.preventDefault();
        const newUser = {
            name: event.target.name.value,
            username: event.target.username.value,
            password: event.target.password.value
        };

        try {
            const user = await userService.create(newUser);
            dispatch(createUser(user));
            navigate('/voting');
        } catch(e) {
            dispatch(createNotification(`${e.response.data.error}`, false));
        }
    };

    return(
        <div>
            <form onSubmit={addUser}>
                <div>
                    Name
                    <input
                        type="text"
                        name="name"
                    />
                </div>
                <div>
                    Username
                    <input
                        type="text"
                        name="username"
                    />
                </div>
                <div>
                    Password
                    <input
                        type="text"
                        name="password"
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;