
const reducer = (state = null, action) => {
    switch(action.type) {
    case 'CREATE_NOTIFICATION':
        return action.data;
    case 'CLEAR_NOTIFICATION':
        return null;
    default:
        return state;
    }
};

let timeOut;

export const createNotification = (notification, type) => {
    return async dispatch => {
        dispatch({
            type: 'CREATE_NOTIFICATION',
            data: {
                notification,
                type
            }
        });

        if(timeOut){
            clearNotification();
        }

        timeOut = setTimeout(() => {
            dispatch({
                type: 'CLEAR_NOTIFICATION'
            });
        }, 5000);

    };
};

export const clearNotification = () => (
    {
        type: 'CLEAR_NOTIFICATION'
    }
);

export default reducer;