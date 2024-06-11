import React, { useState } from 'react';
// import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { Redirect  } from 'expo-router';
import { Route } from 'expo-router/build/Route';


interface LoginProps extends RouteComponentProps {}

const Login: React.FC<LoginProps> = ({  }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implemente a lógica de autenticação aqui
    // Por exemplo, você pode chamar uma API para verificar as credenciais
    // Se for válido, você pode armazenar o token de autenticação no local storage
    // E redirecionar para a página inicial
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
