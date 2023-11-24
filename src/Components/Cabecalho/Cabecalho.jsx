'use client';
import { useContext } from 'react';
import Link from 'next/link';
import AuthContext from '../contexts/AuthContext'; // Importe o contexto de autenticação aqui

const Cabecalho = () => {
  const { user, logout } = useContext(AuthContext); // Obtenha informações de autenticação do contexto

  return (
    <header className="cabecalho">
      <ul>
        {/* Links padrão */}
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/Pages/integracao-dados">Integração de Dados</Link>
        </li>
        <li>
          <Link href="/Pages/prevencao">Prevenção e Promoção da Saúde</Link>
        </li>
        <li>
          <Link href="/Pages/colaboracao">Colaboração Eficiente</Link>
        </li>
        <li>
          <Link href="/Pages/privacidade">Segurança e Privacidade</Link>
        </li>

        {/* Se estiver logado, exiba os links de Feedback, Formulário e Logout */}
        {user ? (
          <>
            <li>
              <Link href="/Pages/feedback">Feedback</Link>
            </li>
            <li>
              <Link href="/Pages/formulario">Formulário</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          /* Se não estiver logado, exiba os links de Login e Registro */
          <li className="login-register">
            <Link href="/Pages/login">
              <button>Login</button>
            </Link>
            <Link href="/Pages/registro">
              <button>Registrar-se</button>
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Cabecalho;

