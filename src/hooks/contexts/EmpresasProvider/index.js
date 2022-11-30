// requisições, regras de negocio

import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from "../../../services/api";

const EmpresasContext = createContext({});

function EmpresasProvider({children}) {
  const [empresas, setEmpresas] = useState([]);
  const [error, setError] = useState("");
  
  const getEmpresas = useCallback(
    async () => {
      try {
        const { data } = await api.get('/empresa');
        setEmpresas(data);
      } catch (error) {
        setError("Erro ao adquirir a lista de empresas");
      }
    
  }, []);
  
  const postEmpresas = useCallback(
    async ({id_empresa, nome}) => {
      try {
        await api.post('/empresa', {
          id_empresa,
          nome
        });
      } catch (error) {
        setError("Erro ao postar uma empresa");
      }
  }, []);

  const putEmpresas = useCallback(
    async ({id_empresa, nome}) => {
      try {
        await api.put(`/empresa/${id_empresa}`, {
          id_empresa, 
          nome
        });
      } catch (error) {
        setError("Erro ao editar a empresa");
      }
  }, []);

  const deleteEmpresas = useCallback(
    async ({id}) => {
      try {
        await api.delete(`/empresa/${id}`);
        setEmpresas(pState => pState.filter(
          state => state.id !== id
        ));
      } catch (error) {
        setError("Erro ao deletar a empresa");
      }
  }, []);

  return (
    <EmpresasContext.Provider 
      value={{
        empresas, 
        error,
        getEmpresas,
        postEmpresas,
        putEmpresas,
        deleteEmpresas        
    }}>
      {children}
    </EmpresasContext.Provider>
  );
}

function useEmpresas() {
  const context = useContext(EmpresasContext);
  return context;
}

export { EmpresasProvider, useEmpresas };