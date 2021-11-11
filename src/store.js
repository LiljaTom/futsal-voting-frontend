import { createStore, combineReducers,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import userReducer from './reducers/userReducer';
import loginReducer from './reducers/loginReducer';

const reducer = combineReducers({
    users: userReducer,
    user: loginReducer
});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;