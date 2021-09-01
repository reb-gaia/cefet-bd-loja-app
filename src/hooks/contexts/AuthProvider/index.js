// auth -> chave de autenticação
// signIn -> login do usuario -> auth
// signOut -> Deslogar o usuario -> excluir o auth
// api
// error -> erros

import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from "../../../services/api";

const AuthContext = createContext({});

function AuthProvider({children}) {
  const [error, setError] = useState("");
  const [auth, setAuth] = useState(() => {
    const token = sessionStorage.getItem('@Login');
    if(token) {
      return token;
    }
    return "";
  });

  // useCallback -> melhora a performance das funções
  const SignIn = useCallback(
    async ({email, password}) => {
      setError("");
      try {
        if(!email || !password) {
          setError("Email e senha inválidos");
          return
        }

        const { data } = await api.get(`/buscarLogin?email=${email}`);

        console.log(data);
        if(data.length === 0) {
          console.log(`a1qui`)
          setError("Email e senha inválidos");
          return
        }
        
        if(data.senhaHash !== password) {
          setError("Email e senha inválidos");
          return
        }

        const  data2  = await api.get(`/isMedico?funcionarioId=${data.pessoa.codigo}`);
        if(data2.data.codigo) {
          sessionStorage.setItem('@Doctor', data2.data.codigo);
        } 

        sessionStorage.setItem('@Login', data.access_token);
        setAuth(data.access_token);
        api.defaults.headers.Authorization = `Bearer ${data.access_token}`

      } catch (error) {
        setError("Email e senha inválidos");
      }
  }, []);

  const SignOut = useCallback(() => {
    sessionStorage.removeItem('@Login');
    sessionStorage.removeItem('@Doctor')
    setAuth("");
  }, []);

  return (
    <AuthContext.Provider 
      value={{
        auth, 
        error,
        SignIn,
        SignOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };