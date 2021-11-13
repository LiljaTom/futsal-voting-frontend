import React from 'react';
import logo from '../images/logo2.JPG';
import { Image } from 'react-bootstrap';

const Home = () => {

    return (
        <div>
            <Image style={{ height:'auto', width:'100%' }} src={logo}/>
        </div>
    );
};

export default Home;