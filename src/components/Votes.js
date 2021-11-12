import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const Votes = () => {

    const votes = useSelector(state => state.votes)
        .sort((a, b) => a.user.name.localeCompare(b.user.name));

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
                                {vote.user.name}
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