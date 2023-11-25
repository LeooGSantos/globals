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

async function handleLogin(email, senha) {
  try {
    const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf8');
    console.log('Dados do arquivo:', file); // Adicionando log dos dados do arquivo
    const dados = JSON.parse(file);
    console.log('Credenciais recebidas:', { email, senha }); // Adicionando log das credenciais recebidas
    const user = dados.usuarios.find((user) => user.email === email && user.senha === senha);
    return user ? user : null;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return null;
  }
}


async function handleCadastro(dadosNovoUsuario) {
  try {
    const dbFile = process.cwd() + '/src/app/api/base/db.json';
    const file = await fs.readFile(dbFile, 'utf8');
    const lista = JSON.parse(file);
    const id = lista.usuarios.length > 0 ? lista.usuarios[lista.usuarios.length - 1].id + 1 : 1;
    const novoUsuario = { id, ...dadosNovoUsuario };
    lista.usuarios.push(novoUsuario);
    await fs.writeFile(dbFile, JSON.stringify(lista));
    return novoUsuario;
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    return null;
  }
}

export async function POST(request, response) {
  const { info, nome, email, senha, idade, telefone, sexo } = await request.json();
  
  switch (info) {
    case 'login':
      const user = await handleLogin(email, senha);
      if (user) {
        return NextResponse.json({ status: true, user });
      }
      // Retornar uma resposta mesmo que não encontre um usuário
      return NextResponse.json({ status: false });
    case 'cadastro':
      const dadosNovoUsuario = { nome, email, senha, idade, telefone, sexo };
      const novoUsuario = await handleCadastro(dadosNovoUsuario);
      if (novoUsuario) {
        return NextResponse.json({ status: true, user: novoUsuario });
      }
      // Retornar uma resposta mesmo que não seja possível cadastrar um novo usuário
      return NextResponse.json({ status: false });
    default:
      // Retorno para qualquer outro caso inesperado
      return NextResponse.json({ status: false });
  }
}
