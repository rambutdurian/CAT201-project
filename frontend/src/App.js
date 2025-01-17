import React, { useEffect, useState } from 'react';
import ExampleComponent from './ExampleComponent';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080')  // Make sure the backend is running on this port
            .then((response) => response.json())  // Parse the response as JSON
            .then((data) => setData(data.message))  // Update state with the message
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <h1>React with Java Backend</h1>
            <ExampleComponent />
            <p>{data ? data : 'Loading...'}</p>
        </div>
    );
}

export default App;
