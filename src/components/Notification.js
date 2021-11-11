import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {

    const notification = useSelector(state => state.notification);

    if(!notification) {
        return null;
    }

    const notificationStyle = {
        background: 'lightgrey',
        padding: 10,
        color: notification.success ? 'green' : 'red'
    };

    return (
        <div style={notificationStyle}>
            {notification.notification}
        </div>
    );

};

export default Notification;