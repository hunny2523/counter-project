import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../store/userSlice';
import { useDispatch } from 'react-redux';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            dispatch(setUser(user.uid))
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' onClick={handleSignUp}>Sign Up</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Signup;
