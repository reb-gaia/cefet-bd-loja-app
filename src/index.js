import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/src/sweetalert2.scss';
import { AuthProvider } from './hooks/contexts/AuthProvider';
import { AppsProvider } from './hooks/contexts/AppsProvider';
import { UsuariosProvider } from './hooks/contexts/UsuariosProvider';
import { EmpresasProvider } from './hooks/contexts/EmpresasProvider';
import { ComprasProvider } from './hooks/contexts/ComprasProvider';
import { AvaliacoesProvider } from './hooks/contexts/AvaliacoesProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AppsProvider>
        <UsuariosProvider>
          <EmpresasProvider>
            <ComprasProvider>
              <AvaliacoesProvider>
                <App />
              </AvaliacoesProvider>
            </ComprasProvider>
          </EmpresasProvider>
        </UsuariosProvider>
      </AppsProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);