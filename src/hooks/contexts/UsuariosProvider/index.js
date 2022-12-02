// requisições, regras de negocio

import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from "../../../services/api";

const UsuariosContext = createContext({});

function UsuariosProvider({children}) {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState("");
  
  const getUsuarios = useCallback(
    async () => {
      try {
        const { data } = await api.get('/users/listAllUsers');
        setUsuarios(data);
      } catch (error) {
        setError("Erro ao adquirir a lista de usuarios");
      }
    
  }, []);
  
  const postUsuarios = useCallback(
    async ({id, nome}) => {
      try {
        await api.post('/users/addUser', {
          id,
          nome  
        });
      } catch (error) {
        setError("Erro ao postar um usuario");
      }
  }, []);

  const putUsuarios = useCallback(
    async ({id, nome}) => {
      try {
        await api.put(`/usuario/${id}`, {
          id, 
          nome
        });
      } catch (error) {
        setError("Erro ao editar o usuario");
      }
  }, []);

  const deleteUsuarios = useCallback(
    async ({id}) => {
      try {
        await api.delete(`/usuario/${id}`);
        setUsuarios(pState => pState.filter(
          state => state.id !== id
        ));
      } catch (error) {
        setError("Erro ao deletar o usuario");
      }
  }, []);

  return (
    <UsuariosContext.Provider 
      value={{
        usuarios, 
        error,
        getUsuarios,
        postUsuarios,
        putUsuarios,
        deleteUsuarios        
    }}>
      {children}
    </UsuariosContext.Provider>
  );
}

function useUsuarios() {
  const context = useContext(UsuariosContext);
  return context;
}

export { UsuariosProvider, useUsuarios };