import React, { useState } from 'react';

interface LoginProps {
    handleLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
    };

    return (
    <div>
    <form onSubmit={handleSubmit}>
        <label>
            Email:
        <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
        />
        </label>
        <label>
            Password:
        <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
        />
        </label>
        <button type="submit">Log In</button>
    </form>
    </div>
);
};

export default Login;