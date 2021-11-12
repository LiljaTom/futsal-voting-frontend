import React from 'react';
import { useDispatch } from 'react-redux';
import { createPlayer } from '../reducers/playersReducer';
import { createNotification } from '../reducers/notificationReducer';
//import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import playerService from '../services/players';

const PlayerForm = () => {

    const dispatch = useDispatch();

    const addPlayer = async(event) => {
        event.preventDefault();
        const newPlayer = {
            name: event.target.name.value
        };

        try {
            const player = await playerService.create(newPlayer);
            dispatch(createPlayer(player));
            dispatch(createNotification(`Added ${player.name}`, true));
            event.target.name.value = '';

        } catch(e) {
            dispatch(createNotification(`${e.response.data.error}`, false));
        }
    };

    return(
        <div>
            <h2>Create player</h2>
            <Form onSubmit={addPlayer}>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name"/>
                    <Button variant="primary" type="submit">Add player</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default PlayerForm;