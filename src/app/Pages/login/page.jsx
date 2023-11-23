// LoginPage.jsx
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useClient } from 'next/client';

export default function LoginPage() {
  useClient(); // Marca este componente como um Componente do Cliente

  const navigate = useRouter();

  useEffect(() => {
    // Use useEffect para garantir que seja executado apenas no lado do cliente
    const formData = {
      email: '',
      password: '',
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/ProjetoGlobalSolution/', formData);
      console.log('Login realizado com sucesso!', response.data);
      // Aqui você pode armazenar o token ou outras informações recebidas no localStorage ou sessionStorage
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };
    const handleChange = (e) => {
      const { name, value } = e.target;
      formData[name] = value;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch('URL_DO_SEU_ENDPOINT_DE_LOGIN', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Lógica para redirecionar ou executar ações após o login bem-sucedido
          navigate.push('/dashboard'); // Exemplo de redirecionamento para a página de dashboard
        } else {
          // Lógica para lidar com falha no login, exibir mensagens de erro, etc.
          console.error('Erro ao fazer login');
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    };

    return () => {
      // Limpeza dos event listeners ou outras operações ao desmontar o componente
    };

  }, [navigate]);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
