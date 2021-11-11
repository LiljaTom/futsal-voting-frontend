import storage from '../utils/storage';

const reducer = (state = null, action) => {
    switch(action.type) {
    case 'LOGIN_USER':
        return action.data;
    case 'LOGOUT_USER':
        return null;
    default:
        return state;
    }
};

export const loginUser = (user) => (
    {
        type: 'LOGIN_USER',
        data: user
    }
);



export const logoutUser = () => {
    return async dispatch => {
        storage.logoutUser();
        dispatch({
            type: 'LOGOUT_USER'
        });
    };
};

export default reducer;