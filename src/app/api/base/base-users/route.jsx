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

// Chamada para criar o db.json
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

const handleCadastro = async (dadosNovoUsuario) => {
    try {
      const dbFile = process.cwd() + '/src/app/api/base/db.json';
      const file = await fs.readFile(dbFile, 'utf8');
      const lista = JSON.parse(file);
  
      const id = lista.usuarios.length > 0 ? lista.usuarios[lista.usuarios.length - 1].id + 1 : 1;
      const novoUsuario = { id, ...dadosNovoUsuario };
      
      lista.usuarios.push(novoUsuario);
  
      await fs.writeFile(process.cwd() + "/src/app/api/base/db.json",JSON.stringify(lista));
  
      return novoUsuario;
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      return null;
    }
  };

export async function POST(request, response) {
  const { info, nome, email, senha, idade, telefone, sexo } = await request.json();
  
  switch (info) {
    case 'login':
      const user = await handleLogin(email, senha);
      if (user) {
        return NextResponse.json({ status: true, user });
      }
      break;
    case 'cadastro':
      const dadosNovoUsuario = { nome, email, senha, idade, telefone, sexo };
      const novoUsuario = await handleCadastro(dadosNovoUsuario);
      if (novoUsuario) {
        return NextResponse.json({ status: true, user: novoUsuario });
      }
      break;
    default:
      return NextResponse.json({ status: false });
  }
}
