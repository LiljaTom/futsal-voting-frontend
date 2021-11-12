import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../reducers/loginReducer';
import { useNavigate } from 'react-router-dom';
import storage from '../utils/storage';

import loginService from '../services/login';
import { createNotification } from '../reducers/notificationReducer';
import { Form, Button } from 'react-bootstrap';


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
            dispatch(createNotification(`Welcome, ${user.username}`, true));

            navigate('/');
        } catch(e) {
            dispatch(createNotification(`${e.response.data.error}`, false));
            event.target.username.value = '';
            event.target.password.value = '';
        }
    };

    return(
        <div>
            <h2>Login</h2>
            <Form onSubmit={login}>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                    />
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                    />
                    <Button variant="primary" type="submit">Login</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default LoginForm;