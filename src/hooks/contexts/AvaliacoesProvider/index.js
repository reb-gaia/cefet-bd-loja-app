// requisições, regras de negocio

import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from "../../../services/api";

const AvaliacoesContext = createContext({});

function AvaliacoesProvider({children}) {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [error, setError] = useState("");
  
  const getAvaliacoes = useCallback(
    async () => {
      try {
        const { data } = await api.get('/avaliacao');
        setAvaliacoes(data);
      } catch (error) {
        setError("Erro ao adquirir a lista de avaliacoes");
      }
    
  }, []);
  
  const postAvaliacoes = useCallback(
    async ({id, id_compra, id_app, id_user, nota}) => {
      try {
        await api.post('/avaliacao', {
          id,
          id_compra,
          id_app, 
          id_user, 
          nota 
        });
      } catch (error) {
        setError("Erro ao postar uma avaliacao");
      }
  }, []);

  const putAvaliacoes = useCallback(
    async ({id, id_compra, id_app, id_user, nota}) => {
      try {
        await api.put(`/avaliacao/${id}`, {
          id_compra,
          id_app, 
          id_user, 
          nota 
        });
      } catch (error) {
        setError("Erro ao editar o avaliacao");
      }
  }, []);

  const deleteAvaliacoes = useCallback(
    async ({id}) => {
      try {
        await api.delete(`/avaliacao/${id}`);
        setAvaliacoes(pState => pState.filter(
          state => state.id !== id
        ));
      } catch (error) {
        setError("Erro ao deletar a avaliacao");
      }
  }, []);

  return (
    <AvaliacoesContext.Provider 
      value={{
        avaliacoes, 
        error,
        getAvaliacoes,
        postAvaliacoes,
        putAvaliacoes,
        deleteAvaliacoes        
    }}>
      {children}
    </AvaliacoesContext.Provider>
  );
}

function useAvaliacoes() {
  const context = useContext(AvaliacoesContext);
  return context;
}

export { AvaliacoesProvider, useAvaliacoes };