import { Inter } from 'next/font/google'
import './globals.css'
import Cabecalho from '../Components/Cabecalho/Cabecalho'
import Rodape from '../Components/Rodape/Rodape'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Safe Connect Health',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="reset">
        <Cabecalho />
          {children}
        <Rodape />
      </body>
    </html>
  );
}
