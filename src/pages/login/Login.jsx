import React, { useState } from 'react';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../store/userSlice';
const Login = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            dispatch(setUser(user.uid))
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;
