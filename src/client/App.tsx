import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import './styles.scss';

export default function App() {
    const [count, setCount] = useState(null);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socket = socketIOClient('http://io.mezmerizxd.net');
        socket.on('count_update', (retData) => {
            setCount(retData);
        });
        setSocket(socket);
        return () => socket.close();
    }, []);

    return (
        <div className="App-container">
            <div className="App">
                <h1>This is your Application</h1>
                <p>You can change whatever you want.</p>
                <p>Server Runtime: {count} Seconds</p>
            </div>
        </div>
    );
}
