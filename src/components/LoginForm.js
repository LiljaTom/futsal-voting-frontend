import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../reducers/loginReducer';
import { useNavigate } from 'react-router-dom';
import storage from '../../utils/storage';

import loginService from '../../services/login';
import { createNotification } from '../../reducers/notificationReducer';


const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async(event) => {
        event.preventDefault();
        const credentials = {
            username: event.target.username.value,
            password: event.target.password.value
        };

        try {
            const user = await loginService.login(credentials);
            dispatch(loginUser(user));
            storage.saveUser(user);
            dispatch(createNotification(`Welcome, ${user.username}`));

            navigate('/');
        } catch(e) {
            dispatch(createNotification(`${e.response.data.error}`, false));
        }
    };

    return(
        <div>
            <form onSubmit={login}>
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
                        type="password"
                        name="password"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;