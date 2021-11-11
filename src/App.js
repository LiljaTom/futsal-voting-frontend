import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Routes, Route, Link, useNavigate
} from 'react-router-dom';

//Components
import Home from './components/Home';
import Notification from './components/notifications/Notification';

//User components
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

//Actions
import { initializeUsers } from './reducers/userReducer';
import { loginUser, logoutUser } from './reducers/loginReducer';
//Utils
import storage from './utils/storage';


const App = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(state => state.user);

    useEffect(() => {
        dispatch(initializeUsers());
        const user = storage.loadUser();
        if(user) {
            dispatch(loginUser(user));
        }
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logoutUser());
        storage.logoutUser();
        navigate('/');
    };

    const navStyle = {
        margin: 10,
        padding: 10,
        backgroundColor: 'lightgray'
    };

    const padding = {
        padding: 5
    };

    return (
        <Router>
            <div style={navStyle}>
                <Link style={padding} to="/">Home</Link>
                <Link style={padding} to="/register">Register</Link>
                { user
                    ? <span><em>{user.username} logged in</em> <button onClick={handleLogout}>Logout</button></span>
                    : <Link style={padding} to="/login">Login</Link>
                }
            </div>

            <Notification />

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<LoginForm />}/>
                <Route path="/register" elements={<RegisterForm />}/>
            </Routes>

        </Router>
    );
};

export default App;