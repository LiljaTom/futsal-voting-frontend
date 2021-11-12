import voteService from '../services/voting';

const reducer = (state = [], action) => {
    switch(action.type) {
    case 'INIT_VOTES':
        return action.data;
    case 'CREATE_VOTE':
        return [...state, action.data];
    default:
        return state;
    }
};

export const initializeVotes = () => {
    return async dispatch => {
        const data = await voteService.getAll();
        dispatch({
            type: 'INIT_VOTES',
            data
        });
    };
};

export const createVote = (vote) => (
    {
        type: 'CREATE_VOTE',
        data: vote
    }
);


export default reducer;