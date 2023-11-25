'use client';
import React, { useState } from 'react';

function RegisterPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    idade: '',
    telefone: '',
    sexo: '', 
  });

  const [showPassword, setShowPassword] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Enviando...');

    try {
      const response = await fetch('http://localhost:3000/api/base/base-users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ info: 'cadastro', ...formData }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status) {
          setFormStatus('Cadastro realizado com sucesso! Redirecionando para a página de login...');
          setTimeout(() => {
            // Redirecionar para a página de login após 2 segundos
            window.location.href = '/Pages/login'; 
          }, 2000);
        } else {
          setFormStatus('Erro no cadastro. Tente novamente.');
        }
      } else {
        setFormStatus('Erro na requisição. Tente novamente.');
      }
    } catch (error) {
      setFormStatus('Erro no cadastro. Tente novamente.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register-form">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" onChange={handleInputChange} />
        <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} />
        <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            name="senha"
            placeholder="Senha"
            onChange={handleInputChange}
          />
          <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} onClick={togglePasswordVisibility}></i>
        </div>
        <input type="text" name="idade" placeholder="Idade" onChange={handleInputChange} />
        <input type="text" name="telefone" placeholder="Número - Ex: +55 11 --------" value={formData.telefone} onChange={handleInputChange} />
        <select name="sexo" value={formData.sexo} onChange={handleInputChange}>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
      {formStatus && <p>{formStatus}</p>}
    </div>
  );
}

export default RegisterPage;

 