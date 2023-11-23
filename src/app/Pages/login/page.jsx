import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
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
      const response = await axios.post('http://localhost:8080/ProjetoGlobalSolution/login', formData);
      console.log('Login realizado com sucesso!', response.data);
      // Faça algo com a resposta se necessário
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Senha" onChange={handleInputChange} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
