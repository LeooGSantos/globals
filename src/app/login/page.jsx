'use client';
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const navigate = useRouter();

  const [userInfo, setUserInfo] = useState({
    usuario: "",
    nome: "",
    sobrenome: "",
    idade: "",
    cpf: "",
    email: "",
    telefone: "",
    sexo: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("URL_PARA_SUA_API_DE_CADASTRO", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        // Cadastro realizado com sucesso, redirecionar ou lidar com a resposta aqui
        navigate.push("/"); // Redirecionamento para a página desejada após o cadastro
      } else {
        // Lidar com erros de cadastro aqui
      }
    } catch (error) {
      console.error("Ocorreu um erro ao tentar realizar o cadastro:", error);
    }
  };

  return (
    <div className="register-form">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="usuario"
          placeholder="Usuário"
          onChange={handleChange}
        />
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          onChange={handleChange}
        />
        <input
          type="text"
          name="sobrenome"
          placeholder="Sobrenome"
          onChange={handleChange}
        />
        <input
          type="text"
          name="idade"
          placeholder="Idade"
          onChange={handleChange}
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          onChange={handleChange}
        />
        <input
          type="text"
          name="sexo"
          placeholder="Sexo"
          onChange={handleChange}
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
