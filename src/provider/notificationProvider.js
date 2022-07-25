import React, { useState, useEffect } from 'react';
import { getNotification } from '../services/notificationService';
import io from 'socket.io-client';

const socket = io("http://localhost:8080");

// service
const notifContext = React.createContext()

const NotifProvider = (props) => {
    const payload = JSON.parse(localStorage.getItem("payload"));

    const [isConnected, setIsConnected] = useState(socket.connected);
    const [notif, setNotif] = useState([]);

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on(payload?.id.toString(), (msg) => {
        }, getNotification().then(res => setNotif(res.data.data)))

    }, [notif]);

    return (
        <notifContext.Provider
        value={{
            notif,
            setNotif            
        }}
        >
            {props.children}
        </notifContext.Provider>
    )
}

export { notifContext, NotifProvider }

