'use client';
import { useState } from 'react';

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
      // Simulação de requisição - substitua por sua lógica de manipulação de dados
      const response = await simulateLogin(formData);
      console.log('Login realizado com sucesso!', response);
      // Faça algo com a resposta se necessário
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  // Função de simulação de login
  const simulateLogin = async (data) => {
    // Simulação de uma requisição assíncrona (pode ser substituída por sua lógica real)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulando um retorno de sucesso após 1 segundo
        resolve({ status: 'success', data });
        // Ou simular um erro:
        // reject({ status: 'error', message: 'Erro ao fazer login' });
      }, 1000);
    });
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
