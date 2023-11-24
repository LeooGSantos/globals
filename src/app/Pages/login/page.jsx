"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/base/base-users', {
      method: 'POST',
      body: JSON.stringify({
        info: 'login',
        ...loginData
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data); // Lidar com a resposta do login

    if (response.ok) {
      if (data.status) {
        // Redirecionamento após o login bem-sucedido
        router.push('/Pages/privacidade');
      } else {
        // Lidar com a situação em que o usuário não está cadastrado
        console.error('Usuário não encontrado ou credenciais inválidas');
        // Você pode exibir uma mensagem na página de login informando sobre o erro
        setErrorMessage('Usuário não encontrado ou credenciais inválidas');
      }
    } else {
      // Lidar com outros tipos de erro de rede ou da API
      console.error('Erro na requisição ou na API');
      // Exibir mensagem genérica de erro, se necessário
      setErrorMessage('Erro na requisição ou na API');
    }
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Senha" onChange={handleInputChange} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
