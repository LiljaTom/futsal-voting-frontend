import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const Players = () => {
    const players = useSelector(state => state.players);

    return (
        <div className="container">
            <h2>Players</h2>
            <Table striped>
                <tbody>
                    <tr>
                        <th>
                    Name
                        </th>
                        <th>
                    Votes
                        </th>
                    </tr>
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
        </div>
    );
};

export default Players;

