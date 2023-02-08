import React from 'react';
import { Link } from 'react-router-dom';
import config from './../../../../config/index';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <button>
                <Link to={config.routes.register}>Register</Link>
            </button>
        </div>
    );
};

export default Login;
