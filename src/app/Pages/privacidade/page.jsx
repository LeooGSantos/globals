import Link from "next/link";

export default function Privacidade() {
  return (
    <div className="Privacidade">
      <h1 className="titulo">Segurança e Privacidade</h1>
      <p className="descricao">
        Explicamos os protocolos robustos de segurança implementados em nossa plataforma para proteger os dados dos usuários e cumprir as regulamentações de privacidade.
      </p>
      <div className="detalhesPrivacidade">
        <h2>Protocolos de Segurança</h2>
        <ul className="listaProtocolos">
          <li className="protocolo">
            <h3>Criptografia de ponta a ponta</h3>
            <p>Garante que os dados são codificados e decodificados apenas pelos usuários autorizados.</p>
          </li>
          <li className="protocolo">
            <h3>Autenticação de dois fatores</h3>
            <p>Adiciona uma camada extra de segurança ao exigir duas formas de identificação para acessar a conta.</p>
          </li>
          <li className="protocolo">
            <h3>Firewall de segurança</h3>
            <p>Bloqueia acessos não autorizados e monitora o tráfego de rede para identificar possíveis ameaças.</p>
          </li>
          <li className="protocolo">
            <h3>Backup regular dos dados</h3>
            <p>Cria cópias de segurança dos dados periodicamente para evitar perdas em caso de incidentes.</p>
          </li>
        </ul>
        <h2>Proteção de Dados</h2>
        <p>
          Garantimos a confidencialidade e a integridade dos dados do usuário. Implementamos medidas rigorosas para garantir que as informações dos usuários sejam protegidas contra qualquer uso indevido ou compartilhamento não autorizado.
        </p>
      </div>
    </div>
  );
}
 