import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebaseConfig";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/main");
        } catch (error) {
            setError("Usuário não cadastrado.");
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p>{error}</p>}
            <button onClick={handleLogin}>Acessar</button>
            <p>Não tem uma conta? <Link to="/">Cadastre-se aqui</Link></p>
        </div>
    );
};

export default Login;
