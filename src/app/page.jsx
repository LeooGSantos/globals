import Link from 'next/link';

export default function Home() {
  return (
    <div className="pagina-principal">
      <h1>Seguro de bicicletas da Porto</h1>
      <img src="/img/5p.jpg" alt="Imagem2" className="imagem-plano" />
      <p>Uma solução completa que oferece proteção e serviços para você se aventurar sem medo.</p>
      <p>Com o Seguro Bike da Porto Seguro, é pedalar e relaxar.</p>
      <p>Faça seu seguro agora, de forma dinâmica e rápida!</p>
      <Link href="/Pages/planos-seguro"> 
        <button>Cote já</button>
      </Link>
    </div>
  );
}






