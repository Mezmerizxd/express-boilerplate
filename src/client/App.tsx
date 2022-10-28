import { useEffect, useState } from 'react';
import Socket from './classes/Socket';
import Api from './classes/Api';
import './styles.scss';

export default function App() {
    const [count, setCount] = useState(null);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        console.log('Setting up Socket');
        const socket = Socket.New();
        socket.on('count_update', (retData) => {
            setCount(retData);
        });
        return () => socket.close();
    }, []);

    const getResponse = async () => {
        console.log('Getting Response');
        setResponse(null);
        const response = await Api.Post('/tests/demo', false, true);
        setResponse(JSON.stringify(response));
    };

    return (
        <div className="App-container">
            <div className="App">
                <h1>Application</h1>
                <p>You can change whatever you want.</p>
                <p>Server Runtime: {count} Seconds</p>
                {response && <p>Response: {response}</p>}
                <button onClick={getResponse}>Get Response</button>
            </div>
        </div>
    );
}
