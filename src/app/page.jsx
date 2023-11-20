import React from 'react';
import Link from "next/link";

export default function Home() {
  return (
    <div className="Home">
      <h1 className="title">Bem-vindo ao Safe Connect Health</h1>
      <p className="description">
        Na vanguarda da saúde conectada, o Safe Connect Health oferece mais do que uma plataforma - é uma revolução no cuidado e na gestão da sua saúde. Integramos dados provenientes de múltiplas fontes para proporcionar uma visão abrangente e única da sua saúde.
      </p>
      <div className="benefitsGrid">
        <div className="benefit">
          <h2>Integração Completa</h2>
          <p>Diferentemente de soluções fragmentadas, integramos dados de diferentes fontes, proporcionando uma visão abrangente da saúde do usuário.</p>
          <button className="bene">
          <Link href="/Pages/integracao-dados">Integração de Dados</Link>
          </button>
        </div>
        <div className="benefit">
          <h2>Enfoque na Prevenção</h2>
          <p>Destaca-se por suas funcionalidades de prevenção, incentivando hábitos saudáveis e alertando para práticas preventivas.</p>
          <button className="bene">
          <Link href="/Pages/prevencao">Prevenção</Link>
          </button>
        </div>
        <div className="benefit">
          <h2>Colaboração Eficiente</h2>
          <p>Facilita a colaboração entre pacientes e profissionais de saúde, promovendo um cuidado mais personalizado e eficiente.</p>
          <button className="bene">
          <Link href="/Pages/colaboracao">Colaboração Eficiente</Link>
          </button>
        </div>
        <div className="benefit">
          <h2>Segurança e Privacidade</h2>
          <p>Implementa protocolos de segurança robustos, garantindo a proteção dos dados do usuário e o cumprimento das regulamentações de privacidade.</p>
          <button className="bene">
          <Link href="/Pages/privacidade">Segurança e Privacidade</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
