// javaApi.jsx
const baseUrl = 'http://localhost:8080/ProjetoGlobalSolution/rest';

const loginUrl = `${baseUrl}/logins`;

const registerUrl = `${baseUrl}/usuarios`;

const loginToJavaAPI = async (email, password) => {
  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Erro ao fazer login');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    throw new Error(error.message);
  }
};

const registerToJavaAPI = async (usuario, nome, sobrenome, idade, cpf, email, telefone, sexo, senha) => {
  try {
    const response = await fetch(registerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ usuario, nome, sobrenome, idade, cpf, email, telefone, sexo, senha }),
    });

    if (!response.ok) {
      throw new Error('Erro ao cadastrar');
    }

    const data = await response.json();
    return data; // Possíveis dados de resposta após o cadastro
  } catch (error) {
    throw new Error(error.message);
  }
};

export { loginToJavaAPI, registerToJavaAPI };
