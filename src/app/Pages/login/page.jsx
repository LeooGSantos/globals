import axios from 'axios';
import { ClientOnly } from 'next/client';
import React from 'react';

export default function LoginPage() {
  return (
    <ClientOnly>
      <LoginForm />
    </ClientOnly>
  );
}

function LoginForm() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('URL_DO_SEU_ENDPOINT_DE_LOGIN', formData);
      console.log('Login realizado com sucesso!', response.data);
      // Aqui você pode armazenar o token ou outras informações recebidas no localStorage ou sessionStorage
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div>
      <h1>Login</h1>
      <p>URL atual: {currentUrl}</p>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Senha" onChange={handleInputChange} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
