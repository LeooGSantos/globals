'use client';
import React, { useState } from 'react';

function RegisterPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    idade: '',
    telefone: '',
    sexo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/base/base-users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Cadastro bem-sucedido:', data);
      } else {
        console.error('Erro no cadastro');
      }
    } catch (error) {
      console.error('Erro no cadastro:', error);
    }
  };

  return (
    <div className="register-form">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" onChange={handleInputChange} />
        <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} />
        <input type="password" name="senha" placeholder="Senha" onChange={handleInputChange} />
        <input type="text" name="idade" placeholder="Idade" onChange={handleInputChange} />
        <input type="text" name="telefone" placeholder="Telefone" onChange={handleInputChange} />
        <input type="text" name="sexo" placeholder="Sexo" onChange={handleInputChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
