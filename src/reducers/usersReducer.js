import userService from '../services/users';

const reducer = (state = [], action) => {
    switch(action.type) {
    case 'INIT_USERS':
        return action.data;
    case 'CREATE_USER':
        return [...state, action.data];
    default:
        return state;
    }
};

export const initializeUsers = () => {
    return async dispatch => {
        const data = await userService.getAll();
        dispatch({
            type: 'INIT_USERS',
            data
        });
    };
};

export const createUser = (user) => (
    {
        type: 'CREATE_USER',
        data: user
    }
);

export default reducer;