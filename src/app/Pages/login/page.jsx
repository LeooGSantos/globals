'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/base/base-users', {
        method: 'POST',
        body: JSON.stringify({ info: 'login', email: loginData.email, senha: loginData.password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        if (data.status) {
          setErrorMessage('');
          router.push('/'); // Redireciona para a página principal após o login bem-sucedido
        } else {
          setErrorMessage('Usuário não encontrado ou credenciais inválidas');
        }
      } else {
        setErrorMessage('Erro na requisição ou na API');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setErrorMessage('Erro na requisição ou na API');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="E-mail" value={loginData.email} onChange={handleInputChange} />
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Senha"
            value={loginData.password}
            onChange={handleInputChange}
          />
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? 'Ocultar' : 'Mostrar'}
          </span>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
        Quando for concluído, você será redirecionado para a página principal. Caso não seja concluído, aparecerá uma mensagem de erro.
      </p>
    </div>
  );
};

export default Login;
