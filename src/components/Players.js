import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Players = () => {
    const players = useSelector(state => state.players);
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    const handleChangeToForm = () => {
        navigate('/players/new');
    };

    return (
        <div className="container">
            <h2>Players</h2>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Votes
                </th>
            </tr>
            <Table striped>
                <tbody>
                    {players.map(player =>
                        <tr key={player.id}>
                            <td>
                                { player.name }
                            </td>
                            <td>
                                { player.votes }
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            {user.username === 'Admin' && <Button variant="primary" onClick={handleChangeToForm}>Add new player</Button>}
        </div>
    );
};

export default Players;

