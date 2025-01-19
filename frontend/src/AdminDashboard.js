import React, { useState, useEffect } from 'react';
import './AdminDashboard.css'; // CSS for styling

// Simulated customer data (to be randomized on each session)
const generateRandomCustomers = () => {
    const names = ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'David White', 'Eva Green', 'Frank Black', 'Grace Lee', 'Hannah Brown'];
    const emails = ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'david@example.com', 'eva@example.com', 'frank@example.com', 'grace@example.com', 'hannah@example.com'];

    let randomCustomers = [];
    for (let i = 0; i < 4; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomEmail = emails[Math.floor(Math.random() * emails.length)];
        const randomAmount = Math.floor(Math.random() * 3) * 50 + 50; // Random amount between 50, 80, 120

        randomCustomers.push({
            id: i + 1,
            name: randomName,
            email: randomEmail,
            paymentAmount: randomAmount
        });
    }
    return randomCustomers;
};

function AdminDashboard() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [customers, setCustomers] = useState([]);

    // Handle login functionality for admin authentication
    const handleLogin = () => {
        if (username === 'admin' && password === 'admin123') {
            setIsAdmin(true);
            localStorage.setItem('isAdmin', 'true');
            const storedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
            if (storedCustomers.length === 0) {
                const randomCustomers = generateRandomCustomers(); // Generate new random customers
                localStorage.setItem('customers', JSON.stringify(randomCustomers));
                setCustomers(randomCustomers);
            } else {
                setCustomers(storedCustomers); // Use existing customers from localStorage
            }
        } else {
            alert('Invalid credentials. Only admins can access this page.');
        }
    };

    useEffect(() => {
        // Check if the admin is already logged in (for simplicity)
        const storedAdmin = localStorage.getItem('isAdmin');
        if (storedAdmin === 'true') {
            setIsAdmin(true);
            const storedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
            setCustomers(storedCustomers);  // Load customers from localStorage
        }
    }, []);

    const handleLogout = () => {
        setIsAdmin(false);
        setCustomers([]);  // Clear customers on logout
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('customers'); // Clear customer data
    };

    return (
        <div className="admin-dashboard">
            {!isAdmin ? (
                <div className="login-form">
                    <h2>Admin Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <div>
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                    <h2>Admin Dashboard</h2>
                    <div className="customer-list">
                        <table>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Payment Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.id}>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>RM {customer.paymentAmount}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminDashboard;