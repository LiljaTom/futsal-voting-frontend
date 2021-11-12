import React from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../reducers/usersReducer';
import { useNavigate } from 'react-router-dom';

import userService from '../services/users';
import { createNotification } from '../reducers/notificationReducer';
import { Form, Button } from 'react-bootstrap';


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
            navigate('/login');
        } catch(e) {
            dispatch(createNotification(`${e.response.data.error}`, false));
            event.target.name.value = '';
            event.target.username.value = '';
            event.target.password.value = '';
        }
    };

    return(
        <div>
            <h2>Register</h2>
            <Form onSubmit={addUser}>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name"/>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" name="username"/>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="text" name="password"/>
                    <Button variant="primary" type="submit">Register</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default RegisterForm;