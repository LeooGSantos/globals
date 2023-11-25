import Link from "next/link";

export default function IntegracaoDados() {
  return (
    <div className="IntegracaoDados">
      <h1 className="titulo">Integração de Dados</h1>
      <p className="descricao">
        Detalhamos como nossa plataforma integra dados de várias fontes para fornecer uma visão abrangente da saúde do usuário.
      </p>
      <div className="detalhesIntegracaoDados">
        <div className="detalhesQuadro">
          <h2>Detalhes da Integração de Dados</h2>
          <p>
            A integração de dados é um aspecto fundamental do Safe Connect Health. Nossa plataforma utiliza tecnologias avançadas para reunir informações de diferentes fontes, tais como:
          </p>
          <ul className="quadros">
            <li className="quadro">Registros médicos</li>
            <li className="quadro">Dados de dispositivos wearable</li>
            <li className="quadro">Histórico de consultas</li>
            <li className="quadro">Resultados de exames</li>
          </ul>
          <p>
            Isso permite uma visão completa da saúde do usuário em um único local.
          </p>
        </div>
        <div className="detalhesQuadro">
          <h2>Benefícios da Integração</h2>
          <p>
            Essa abordagem holística oferece benefícios significativos para a saúde do usuário. Ao integrar dados de várias fontes, conseguimos identificar padrões, fornecer alertas proativos e insights personalizados. Isso ajuda na prevenção de condições de saúde, diagnóstico precoce e oferece um cuidado mais personalizado e eficaz.
          </p>
        </div>
      </div>
    </div>
  );
}
