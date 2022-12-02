// requisições, regras de negocio

import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from "../../../services/api";

const AppsContext = createContext({});

function AppsProvider({children}) {
  const [apps, setApps] = useState([]);
  const [error, setError] = useState("");
  
  const getApps = useCallback(
    async () => {
      try {
        const { data } = await api.get('/apps/listAllApps');
        setApps(data.apps);
      } catch (error) {
        setError("Erro ao adquirir a lista de apps");
      }
    
  }, []);
  
  const postApps = useCallback(
    async (data) => {
      try {
        await api.post('/apps/addNewApp', {
          data
        });
      } catch (error) {
        setError("Erro ao postar um aplicativo");
      }
  }, []);

  const putApps = useCallback(
    async ({id, id_empresa, nome, descricao, versao, valor}) => {
      try {
        await api.put(`/apps/editAppInfo/${id}`, {
          id,
          id_empresa, 
          nome, 
          descricao, 
          versao,
          valor
        });
      } catch (error) {
        setError("Erro ao editar o aplicativo");
      }
  }, []);

  const deleteApps = useCallback(
    async ({id}) => {
      try {
        await api.delete(`/apps/deleteApp/${id}`);
        setApps(pState => pState.filter(
          state => state.id !== id
        ));
      } catch (error) {
        setError("Erro ao deletar o aplicativo");
      }
  }, []);

  return (
    <AppsContext.Provider 
      value={{
        apps, 
        error,
        getApps,
        postApps,
        putApps,
        deleteApps        
    }}>
      {children}
    </AppsContext.Provider>
  );
}

function useApps() {
  const context = useContext(AppsContext);
  return context;
}

export { AppsProvider, useApps };