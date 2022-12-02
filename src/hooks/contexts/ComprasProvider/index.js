// requisições, regras de negocio

import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from "../../../services/api";

const ComprasContext = createContext({});

function ComprasProvider({children}) {
  const [compras, setCompras] = useState([]);
  const [error, setError] = useState("");
  
  const getCompras = useCallback(
    async (id) => {
      try {
        const { data } = await api.get(`/purchases/getUserPurchases/${id}`);
        setCompras(data.purchases);
      } catch (error) {
        setError("Erro ao adquirir a lista de compras");
      }
    
  }, []);
  
  const postCompras = useCallback(
    async (data) => {
      try {
        await api.post('/purchases/addPurchase', {
          data
        });
      } catch (error) {
        setError("Erro ao postar uma compra");
      }
  }, []);

  const putCompras = useCallback(
    async ({id, id_app, id_user, data_compra, valor}) => {
      try {
        await api.put(`/purchases/editPurchase/${id}`, {
          id,
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
    async (id) => {
      try {
        await api.delete(`/purchases/deletePurchase/${id}`);
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