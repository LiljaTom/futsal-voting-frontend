import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Routes, Route, Link, useNavigate
} from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';
import banner from './images/futsalBanner.jpg';
//Components
import Home from './components/Home';
import Notification from './components/Notification';
import Reset from './components/Reset';
//Voting components
import VotingForm from './components/VotingForm';
import Votes from './components/Votes';

//User components
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Users from './components/Users';

//Player components
import PlayerForm from './components/PlayerForm';
import Players from './components/Players';

//Actions
import { initializeUsers } from './reducers/usersReducer';
import { loginUser, logoutUser } from './reducers/loginReducer';
//import { createNotification } from './reducers/notificationReducer';
import { initializePlayers } from './reducers/playersReducer';
import { initializeVotes } from './reducers/votesReducer';
//Utils
import storage from './utils/storage';


const App = () => {

    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeUsers());
        dispatch(initializePlayers());
        dispatch(initializeVotes());
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

    if(user && user.username === 'Admin') {
        return(
            <div className="container">
                <Image src={banner} fluid/>
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
                                <Link style={padding} to="/voting">Voting</Link>
                            </Nav.Link>
                            <Nav.Link href="#" as="span">
                                <Link style={padding} to="/users">Users</Link>
                            </Nav.Link>
                            <Nav.Link href="#" as="span">
                                <Link style={padding} to="/votes">Votes</Link>
                            </Nav.Link>
                            <Nav.Link href="#" as="span">
                                <Link style={padding} to="/register">Register</Link>
                            </Nav.Link>
                            <Nav.Link href="#" as="span">
                                {user && <Link style={padding} to="/players/new">Add player</Link>}
                            </Nav.Link>
                            <Nav.Link href="#" as="span">
                                {user && <Link style={padding} to="/billGates">Reset database</Link>}
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
                <Notification />

                <Routes>
                    <Route path="/login" element={<LoginForm />}/>
                    <Route path="/register" element={<RegisterForm />}/>
                    <Route path="/players/new" element={<PlayerForm />}/>
                    <Route path="/players" element={<Players />}/>
                    <Route path="/voting" element={<VotingForm />}/>
                    <Route path="/votes" element={<Votes />}/>
                    <Route path="/users" element={<Users />}/>
                    <Route path="/billGates" element={<Reset />}/>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </div>
        );
    }

    return (
        <div className="container">
            <Image src={banner} fluid/>


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
                        { user &&
                        <Nav.Link href="#" as="span">
                            <Link style={padding} to="/voting">Voting</Link>
                        </Nav.Link>
                        }
                        <Nav.Link href="#" as="span">
                            <Link style={padding} to="/votes">Votes</Link>
                        </Nav.Link>
                        <Nav.Link href="#" as="span">
                            <Link style={padding} to="/register">Register</Link>
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
            <Notification />

            <Routes>
                <Route path="/login" element={<LoginForm />}/>
                <Route path="/register" element={<RegisterForm />}/>
                <Route path="/players/new" element={<PlayerForm />}/>
                <Route path="/players" element={<Players />}/>
                <Route path="/voting" element={<VotingForm />}/>
                <Route path="/votes" element={<Votes />}/>
                <Route path="/users" element={<Users />}/>
                <Route path="/" element={<Home />}/>
            </Routes>

        </div>
    );
};

export default App;