// local que determina as rotas
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "../pages/Login";
import Home from "../pages/Home";
import Galery from "../pages/Galery";

import CreateAddresses from "../pages/CreateAddresses";
import CreateSchedules from "../pages/CreateSchedules";
import CreateEmployee from "../pages/CreateEmployee";
import CreatePatients from "../pages/CreatePatients";

import Employee from "../pages/Employee";
import Patients from "../pages/Patients";
import Addresses from "../pages/Addresses";
import Schedules from "../pages/Schedules";

import NotFound from "../pages/NotFound";
import NavBar from "../components/NavBar";

import { Styled } from './styles';
import { useAuth } from '../hooks/contexts/AuthProvider';

export default function Routes() {
  const { auth } = useAuth();
  return (
    <Styled.AppLayout>
      <NavBar />
      <Styled.PageLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/galery" component={Galery} />
          <Route path="/create-adresses" component={CreateAddresses} />
          <Route path="/create-schedules" component={CreateSchedules} />
          <Route path="/login" component={Login} />

          {auth && <Route path="/create-employee" component={CreateEmployee} />}
          {auth && <Route path="/edit-employee/:id" component={CreateEmployee} />}

          {auth && <Route path="/create-patients" component={CreatePatients} />}
          {auth && <Route path="/edit-patients/:id" component={CreatePatients} />}

          {auth && <Route path="/employee" component={Employee} />}
          {auth && <Route path="/patients" component={Patients} />}
          {auth && <Route path="/addresses" component={Addresses} />}
          {auth && <Route path="/schedules" component={Schedules} />}
          
          <Redirect from="*" to={NotFound} />
        </Switch>
      </Styled.PageLayout>
    </Styled.AppLayout>
  )
}