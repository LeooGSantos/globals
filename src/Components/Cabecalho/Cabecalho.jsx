import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <ul>
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
          <Link href="/Pages/colaboracao">Prevenção e Promoção da Saúde</Link>
        </li>
        <li>
          <Link href="/Pages/prevencao">Prevenção e Promoção da Saúde</Link>
        </li>
        <li className="login-register">
            <Link href="/Pages/login">
              <button>Login</button>
            </Link>
            <Link href="/Pages/registro">
              <button>Registrar-se</button>
            </Link>
          </li>
      </ul>
    </header>
  );
}
