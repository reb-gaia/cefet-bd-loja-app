// requisições, regras de negocio

import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from "../../../services/api";

const ComprasContext = createContext({});

function ComprasProvider({children}) {
  const [compras, setCompras] = useState([]);
  const [error, setError] = useState("");
  
  const getCompras = useCallback(
    async () => {
      try {
        const { data } = await api.get('/compra');
        setCompras(data);
      } catch (error) {
        setError("Erro ao adquirir a lista de compras");
      }
    
  }, []);
  
  const postCompras = useCallback(
    async ({id_compra, id_app, id_user, data_compra, valor}) => {
      try {
        await api.post('/compra', {
          id_compra,
          id_app, 
          id_user, 
          data_compra, 
          valor    
        });
      } catch (error) {
        setError("Erro ao postar uma compra");
      }
  }, []);

  const putCompras = useCallback(
    async ({id_compra, id_app, id_user, data_compra, valor}) => {
      try {
        await api.put(`/compra/${id_compra}`, {
          id_compra,
          id_app, 
          id_user, 
          data_compra, 
          valor
        });
      } catch (error) {
        setError("Erro ao editar a compra");
      }
  }, []);

  const deleteCompras = useCallback(
    async ({id}) => {
      try {
        await api.delete(`/compra/${id}`);
        setCompras(pState => pState.filter(
          state => state.id !== id
        ));
      } catch (error) {
        setError("Erro ao deletar a compra");
      }
  }, []);

  return (
    <ComprasContext.Provider 
      value={{
        compras, 
        error,
        getCompras,
        postCompras,
        putCompras,
        deleteCompras        
    }}>
      {children}
    </ComprasContext.Provider>
  );
}

function useCompras() {
  const context = useContext(ComprasContext);
  return context;
}

export { ComprasProvider, useCompras };