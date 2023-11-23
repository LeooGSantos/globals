'use client';
import { useEffect, useState } from 'react';

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
      // Simulação de requisição - substitua por sua lógica de manipulação de dados
      const response = await simulateRegister(formData);
      console.log('Cadastro realizado com sucesso!', response);
      // Faça algo com a resposta se necessário
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };

  // Função de simulação de cadastro
  const simulateRegister = async (data) => {
    // Simulação de uma requisição assíncrona (pode ser substituída por sua lógica real)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulando um retorno de sucesso após 1 segundo
        resolve({ status: 'success', data });
        // Ou simular um erro:
        // reject({ status: 'error', message: 'Erro ao cadastrar usuário' });
      }, 1000);
    });
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
