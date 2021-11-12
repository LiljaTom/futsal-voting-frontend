import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import voteService from '../services/voting';
import { createVote } from '../reducers/votesReducer';

const VotingForm = () => {
    const players = useSelector(state => state.players);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const vote = async(event) => {
        event.preventDefault();
        console.log(event.target.first.value);
        console.log(event.target.second.value);
        console.log(event.target.third.value);

        const newVote = {
            first: event.target.first.value,
            second: event.target.second.value,
            third: event.target.third.value
        };

        try {
            const vote = await voteService(newVote);
            dispatch(createVote(vote));
            navigate('/');
        } catch(e) {
            console.log(e.response.data.error);
        }
    };

    return(
        <div>
            <h2>Voting</h2>
            <Form onSubmit={vote}>
                <Form.Group>
                    <div className="container">
                        <Form.Label>3 Points: </Form.Label>
                        <select name="first">
                            {players.map(player =>
                                <option key={player.id}>
                                    {player.name}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="container">
                        <Form.Label>2 Points: </Form.Label>
                        <select name="second">
                            {players.map(player =>
                                <option key={player.id}>
                                    {player.name}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="container">
                        <Form.Label>1 Point: </Form.Label>
                        <select name="third">
                            {players.map(player =>
                                <option key={player.id}>
                                    {player.name}
                                </option>
                            )}
                        </select>
                    </div>
                    <Button variant="primary" type="submit">Add</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default VotingForm;