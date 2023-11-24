import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    return false;
  }
}

// Função para criar o arquivo db.json se ele não existir
async function createDbIfNotExists() {
  const dbFile = process.cwd() + '/src/app/api/base/db.json';
  const exists = await fileExists(dbFile);
  
  if (!exists) {
    await fs.writeFile(dbFile, JSON.stringify({ usuarios: [] }));
  }
}

// Chamada para criar o db.json s
createDbIfNotExists();

async function GET(request, { params }) {
  const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf8');
  const lista = JSON.parse(file);
  return NextResponse.json(lista);
}

const handleLogin = async (email, senha) => {
  const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf8');
  const dados = JSON.parse(file);

  try {
    const user = dados.usuarios.find((user) => user.email === email && user.senha === senha);
    return user;
  } catch (error) {
    console.error(error);
  }
};

const handleCadastro = async (nome, email, senha) => {
  const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf8');
  const lista = JSON.parse(file);
  const id = lista.usuarios[lista.usuarios.length - 1].id + 1;
  const novoUsuario = { id, nome, email, senha };
  lista.usuarios.push(novoUsuario);
  await fs.writeFile(process.cwd() + '/src/app/api/base/db.json', JSON.stringify(lista));
  return novoUsuario;
};

export async function POST(request, response) {
  const { info, nome, email, senha } = await request.json();

  switch (info) {
    case 'login':
      const user = await handleLogin(email, senha);
      if (user) {
        return NextResponse.json({ status: true, user: user });
      }
      break;
    case 'cadastro':
      const novoUsuario = await handleCadastro(nome, email, senha);
      if (novoUsuario) {
        return NextResponse.json({ status: true, user: novoUsuario });
      }
      break;
    default:
      return NextResponse.json({ status: false });
  }
}
