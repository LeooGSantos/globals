'use client';
import React, { useState } from 'react';
import { registerToJavaAPI } from '../../api/base/api-java/javaApi';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    usuario: '',
    nome: '',
    sobrenome: '',
    idade: '',
    cpf: '',
    email: '',
    telefone: '',
    sexo: '',
    senha: '',
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
      const { usuario, nome, sobrenome, idade, cpf, email, telefone, sexo, senha } = formData;
      // Faz a chamada para a função de cadastro na API Java
      const response = await registerToJavaAPI(
        usuario,
        nome,
        sobrenome,
        idade,
        cpf,
        email,
        telefone,
        sexo,
        senha
      );
      console.log('Cadastro realizado com sucesso!', response);

      // Salvando dados no LocalStorage após o cadastro bem-sucedido
      localStorage.setItem('registrationData', JSON.stringify(response)); // Salva a resposta da API

    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };

  return (
    <div className="register-form">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="usuario" placeholder="Usuário" onChange={handleInputChange} />
        <input type="text" name="nome" placeholder="Nome" onChange={handleInputChange} />
        <input type="text" name="sobrenome" placeholder="Sobrenome" onChange={handleInputChange} />
        <input type="text" name="idade" placeholder="Idade" onChange={handleInputChange} />
        <input type="text" name="cpf" placeholder="CPF" onChange={handleInputChange} />
        <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} />
        <input type="text" name="telefone" placeholder="Telefone" onChange={handleInputChange} />
        <input type="text" name="sexo" placeholder="Sexo" onChange={handleInputChange} />
        <input type="password" name="senha" placeholder="Senha" onChange={handleInputChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
