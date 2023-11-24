'use client';
import React, { useState } from 'react';
import { loginToJavaAPI } from '../../api/base/api-java/javaApi';

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
      const { email, password } = formData;
      // Faz a chamada para a função de login na API Java
      const response = await loginToJavaAPI(email, password);
      console.log('Login realizado com sucesso!', response);

      // Salvando dados no LocalStorage após o login bem-sucedido
      localStorage.setItem('userData', JSON.stringify(response)); // Salva a resposta da API

    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Senha" onChange={handleInputChange} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
