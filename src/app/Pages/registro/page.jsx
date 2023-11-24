'use client';
import { useState } from 'react';

export default function Registro() {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/base/base-users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          info: 'cadastro',
          nome: usuario.nome,
          email: usuario.email,
          senha: usuario.senha,
        }),
      });

      if (response.ok) {
        // Aqui você pode redirecionar o usuário para outra página ou fazer algo após o registro bem-sucedido
      } else {
        // Tratar erro no registro
      }
    } catch (error) {
      console.error('Erro ao registrar:', error);
    }
  };

  return (
    <div className="registro-form">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        {/* Campos para registro */}
        <input type="text" name="nome" placeholder="Nome" onChange={handleChange} />
        <input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
        <input type="password" name="senha" placeholder="Senha" onChange={handleChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}


