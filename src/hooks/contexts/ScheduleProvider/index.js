// requisições, regras de negocio

import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from "../../../services/api";

const ScheduleContext = createContext({});

function ScheduleProvider({children}) {
  const [schedules, setSchedules] = useState([]);
  const [error, setError] = useState("");
  

  const getSchedule = useCallback(
    async () => {
      try {
        const { data } = await api.get('/schedules');
        setSchedules(data);
      } catch (error) {
        setError("Erro ao adquirir a lista de produtos");
      }
    
  }, []);
  
  const postSchedule = useCallback(
    async ({name, email, phone, doctorType, doctor, date, hour}) => {
      try {
        await api.post('/Schedules', {
          name, 
          email, 
          phone,
          doctorType,
          doctor, 
          date, 
          hour       
        });
      } catch (error) {
        setError("Erro ao postar um produto");
      }
  }, []);

  const putSchedule = useCallback(
    async ({id, name, email, phone, doctorType, doctor, date, hour}) => {
      try {
        await api.put(`/Schedules/${id}`, {
          id,
          name, 
          email, 
          phone,
          doctorType,
          doctor, 
          date, 
          hour
        });
      } catch (error) {
        setError("Erro ao editar o produto");
      }
  }, []);

  const deleteSchedule = useCallback(
    async ({id}) => {
      try {
        await api.delete(`/Schedules/${id}`);
        setSchedules(pState => pState.filter(
          state => state.id !== id
        ));
      } catch (error) {
        setError("Erro ao deletar o produto");
      }
  }, []);

  return (
    <ScheduleContext.Provider 
      value={{
        schedules, 
        error,
        getSchedule,
        postSchedule,
        putSchedule,
        deleteSchedule        
    }}>
      {children}
    </ScheduleContext.Provider>
  );
}

function useSchedule() {
  const context = useContext(ScheduleContext);
  return context;
}

export { ScheduleProvider, useSchedule };