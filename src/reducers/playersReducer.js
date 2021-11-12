import playerService from '../services/players';

const reducer = (state = [], action) => {
    switch(action.type) {
    case 'INIT_PLAYERS':
        return action.data;
    case 'CREATE_PLAYER':
        return [...state, action.data];
    default:
        return state;
    }
};

export const initializePlayers = () => {
    return async dispatch => {
        const data = await playerService.getAll();
        dispatch({
            type: 'INIT_PLAYERS',
            data
        });
    };
};

export const createPlayer = (player) => (
    {
        type: 'CREATE_PLAYER',
        data: player
    }
);

export default reducer;