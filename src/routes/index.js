// local que determina as rotas
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "../pages/Home";
import MinhasCompras from "../pages/MinhasCompras";
import MinhasAvaliacoes from "../pages/MinhasAvaliacoes";
import MeusApps from "../pages/MeusApps";
import Usuarios from "../pages/Usuarios";
import Empresas from "../pages/Empresas";

import NotFound from "../pages/NotFound";
import NavBar from "../components/NavBar";

import NovoApp from '../pages/Criacao/NovoApp';
import NovaEmpresa from '../pages/Criacao/NovaEmpresa';
import NovaAvaliacao from '../pages/Criacao/NovaAvaliacao';
import NovoUsuario from '../pages/Criacao/NovoUsuario';
import EditarCompra from '../pages/Criacao/EditarCompra';

import { Styled } from './styles';

export default function Routes() {
  return (
    <Styled.AppLayout>
      <NavBar />
      <Styled.PageLayout>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/criar-app" component={NovoApp} />
          <Route path="/editar-app/:id" component={NovoApp} />

          <Route path="/criar-empresa" component={NovaEmpresa} />
          <Route path="/editar-empresa/:id" component={NovaEmpresa} />

          <Route path="/criar-avaliacao" component={NovaAvaliacao} />
          <Route path="/editar-avaliacao/:id" component={NovaAvaliacao} />
          
          <Route path="/criar-usuario" component={NovoUsuario} />
          <Route path="/editar-usuario/:id" component={NovoUsuario} />
          
          <Route path="/editar-compra/:id" component={EditarCompra} />
        
          <Route path="/minhas-compras" component={MinhasCompras} />
          <Route path="/minhas-avaliacoes" component={MinhasAvaliacoes} />
          <Route path="/meus-aplicativos" component={MeusApps} />
          <Route path="/usuarios" component={Usuarios} />
          <Route path="/empresas" component={Empresas} />

          
          <Redirect from="*" to={NotFound} />
        </Switch>
      </Styled.PageLayout>
    </Styled.AppLayout>
  )
}