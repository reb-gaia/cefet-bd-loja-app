// requisições, regras de negocio

import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from "../../../services/api";

const AddressesContext = createContext({});

function AddressesProvider({children}) {
  const [addresses, setAddresses] = useState([]);
  const [error, setError] = useState("");
  

  const getAddresses = useCallback(
    async () => {
      try {
        const { data } = await api.get('/addresses');
        setAddresses(data);
      } catch (error) {
        setError("Erro ao adquirir a lista de endereços");
      }
    
  }, []);
  
  const postAddresses = useCallback(
    async ({cep, street, district, city, estado}) => {
      try {
        await api.post('/addresses', {
          cep, 
          street, 
          district, 
          city, 
          estado       
        });
      } catch (error) {
        setError("Erro ao postar um endereço");
      }
  }, []);

  const putAddresses = useCallback(
    async ({id, cep, street, district, city, estado}) => {
      try {
        await api.put(`/addresses/${id}`, {
          cep, 
          street, 
          district, 
          city, 
          estado
        });
      } catch (error) {
        setError("Erro ao editar o endereço");
      }
  }, []);

  const deleteAddresses = useCallback(
    async ({id}) => {
      try {
        await api.delete(`/addresses/${id}`);
        setAddresses(pState => pState.filter(
          state => state.id !== id
        ));
      } catch (error) {
        setError("Erro ao deletar o endereço");
      }
  }, []);

  return (
    <AddressesContext.Provider 
      value={{
        addresses, 
        error,
        getAddresses,
        postAddresses,
        putAddresses,
        deleteAddresses        
    }}>
      {children}
    </AddressesContext.Provider>
  );
}

function useAddresses() {
  const context = useContext(AddressesContext);
  return context;
}

export { AddressesProvider, useAddresses };