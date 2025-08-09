import React, {useState} from 'react';
import useAuth from "../../../../hooks/useAuth.js";
import {useNavigate} from "react-router";
import userRepository from "../../../../repository/userRepository.js";
import "./Login.css";

const initialFormData = {
    username: "",
    password: ""
};

const Login = () => {
    const {login} = useAuth();
    const [formData, setFormData] = useState(initialFormData);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        
        userRepository
            .login(formData)
            .then(response => {
                console.log("Succesfully logged in!");
                login(response.data.token);
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1>Welcome</h1>
                    <p>Sign in to continue</p>
                </div>
                
                <form onSubmit={handleSubmit} className="login-form">
                    
                    <div className="form-group">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            required
                            disabled={isLoading}
                            className="form-input"
                        />
                    </div>
                    
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                            disabled={isLoading}
                            className="form-input"
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="login-button"
                        disabled={isLoading}
                    >
                        {isLoading ? "Signing in..." : "Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;