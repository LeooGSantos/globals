import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
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
      const response = await axios.post('http://localhost:8080/ProjetoGlobalSolution/register', formData);
      console.log('Cadastro realizado com sucesso!', response.data);
      // Faça algo com a resposta se necessário
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Nome de usuário" onChange={handleInputChange} />
        <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Senha" onChange={handleInputChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
