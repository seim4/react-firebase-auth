import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../firebaseConfig";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await setDoc(doc(db, "users", user.uid), {
                firstName,
                lastName,
                birthDate,
                email,
            });
            navigate("/login");
        } catch (error) {
            console.error("Erro ao cadastrar usuário: ", error);
        }
    };

    return (
        <div className="container">
            <h1>Cadastro</h1>
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
            <input
                type="text"
                placeholder="Nome"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Sobrenome"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
            />
            <button onClick={handleRegister}>Cadastrar</button>
            <p>Já tem uma conta? <Link to="/login">Faça login aqui</Link></p>
        </div>
    );
};

export default Register;
