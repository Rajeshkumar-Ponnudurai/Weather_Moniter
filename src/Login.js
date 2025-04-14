import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Style.css';

function Login() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

const handlelogin = (e) => {
    e.preventDefault();
    if(email === "test@gmail.com" && password === "1234"){
        navigate("/weather");
    }
    else{
        alert("Invalid Credentials");
    }
};
    return(
        <div className="login-page">
            <form onSubmit={handlelogin} className="login-card">
            <h2>🌦️ Weather App Login</h2>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="styled-input"
            />

            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="styled-input"
            />
            <button type="submit" className="styled-btn">Login</button>
            </form>
        </div>
    );
}
export default Login;


