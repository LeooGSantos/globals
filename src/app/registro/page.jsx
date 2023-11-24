import axios from 'axios';
import { ClientOnly } from 'next/client';
import React from 'react';

export default function RegisterPage() {
  return (
    <div>
      <h1>Cadastro</h1>
      <ClientOnly>
        <FormularioCadastro />
      </ClientOnly>
    </div>
  );
}

function FormularioCadastro() {
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
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
      // Enviar dados de cadastro para o backend
      const response = await axios.post('/api/register', formData);
      console.log('Cadastro bem-sucedido:', response.data);
    } catch (error) {
      console.error('Erro no cadastro:', error);
    }
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <form onSubmit={handleSubmit}>
      <p>URL atual: {currentUrl}</p>
      <input
        type="text"
        placeholder="Nome de usuário"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        placeholder="Senha"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
