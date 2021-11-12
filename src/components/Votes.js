import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const Votes = () => {

    const votes = useSelector(state => state.votes);

    if(votes.length === 0) {
        return(
            <div className="container">
                No votes yet
            </div>
        );
    }

    return(
        <div className="container">
            <h2>Votes</h2>
            <Table striped>
                <tbody>
                    <tr>
                        <th>
                            Username
                        </th>
                        <th>
                            3 Points
                        </th>
                        <th>
                            2 Points
                        </th>
                        <th>
                            1 Point
                        </th>
                    </tr>
                    {votes.map(vote =>
                        <tr key={vote.id}>
                            <td>
                                {vote.username}
                            </td>
                            <td>
                                {vote.first}
                            </td>
                            <td>
                                {vote.second}
                            </td>
                            <td>
                                {vote.third}
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default Votes;