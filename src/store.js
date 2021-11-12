import { createStore, combineReducers,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import usersReducer from './reducers/usersReducer';
import loginReducer from './reducers/loginReducer';
import notificationReducer from './reducers/notificationReducer';
import playersReducer from './reducers/playersReducer';

const reducer = combineReducers({
    users: usersReducer,
    user: loginReducer,
    notification: notificationReducer,
    players: playersReducer
});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;