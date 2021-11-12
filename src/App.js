import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Routes, Route, Link, useNavigate
} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
//Components
import Home from './components/Home';
import Notification from './components/Notification';

//User components
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

//Player components
import PlayerForm from './components/PlayerForm';
import Players from './components/Players';

//Actions
import { initializeUsers } from './reducers/usersReducer';
import { loginUser, logoutUser } from './reducers/loginReducer';
//import { createNotification } from './reducers/notificationReducer';
import { initializePlayers } from './reducers/playersReducer';
//Utils
import storage from './utils/storage';


const App = () => {

    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeUsers());
        dispatch(initializePlayers());
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

    const padding = {
        padding: 5
    };

    return (
        <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#" as="span">
                            <Link style={padding} to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link href="#" as="span">
                            <Link style={padding} to="/players">Players</Link>
                        </Nav.Link>
                        <Nav.Link href="#" as="span">
                            {user
                                ? <span><em>{user.username} logged in</em> <button onClick={handleLogout}>Logout</button></span>
                                : <Link style={padding} to="/login">Login</Link>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1>Kapteeni äänestys</h1>

            <Notification />

            <Routes>
                <Route path="/login" element={<LoginForm />}/>
                <Route path="/register" element={<RegisterForm />}/>
                <Route path="/players/new" element={<PlayerForm />}/>
                <Route path="/players" element={<Players />}/>
                <Route path="/" element={<Home />}/>
            </Routes>

        </div>
    );
};

export default App;