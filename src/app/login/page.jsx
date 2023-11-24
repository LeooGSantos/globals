"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Login() {
    const navigate = useRouter();

    const [usuario, setUsuario] = useState({
        "info": "login",
        "email": "",
        "senha": ""
    });

    const [msgStatus, setMsgStatus] = useState("");
    const [classeMsg, setClasseMsg] = useState("");

    useEffect(() => {
        if (msgStatus === "Login realizado com SUCESSO!") {
            setClasseMsg("login-sucesso");
        } else if (msgStatus === "Nome de usuário ou senha inválidos!") {
            setClasseMsg("login-erro");
        } else {
            setClasseMsg("login-none");
        }
    }, [msgStatus]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/base/base-users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario)
            });

            if (response.ok) {
                const data = await response.json();
                if (data.status) {
                    setMsgStatus("Login realizado com SUCESSO!");

                    const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                    sessionStorage.setItem("token-user", tokenUser);
                    sessionStorage.setItem("user-obj", JSON.stringify(data.user));

                    setTimeout(() => {
                        navigate.push("/");
                    }, 5000);

                } else {
                    setMsgStatus("Nome de usuário ou senha inválidos!");

                    setTimeout(() => {
                        setMsgStatus("");
                        setUsuario({
                            "email": "",
                            "senha": ""
                        });
                    }, 5000);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
          </form>
        </div>
      );      
}
