import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";

import { auth, db } from "../firebaseConfig";

const Main = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (user) {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                }
            }
            else {
                navigate("/login");
            }
        };
        fetchUserData();
    }, []);

    return (
        <div className="container">
            <h1>Página Principal</h1>
            {userData ? (
                <div>
                    <p><strong>Nome:</strong> {userData.firstName}</p>
                    <p><strong>Sobrenome:</strong> {userData.lastName}</p>
                    <p><strong>Data de Nascimento:</strong> {formatDate(userData.birthDate)}</p>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default Main;
