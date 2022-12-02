import React, { useMemo, useEffect } from 'react';
import { useFormik } from 'formik';
import { Form, Button} from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Container from '../../../components/Container';
import { Styled } from './styles';
import { useUsuarios } from '../../../hooks/contexts/UsuariosProvider';
import Swal from 'sweetalert2';

function NovoUsuario() {
  const history = useHistory();
  const { id } = useParams()
  const { state } = useLocation()

  const { error, postUsuarios, putUsuarios } = useUsuarios();
     
  useEffect(() => {
    console.log(state);
  });

  const formik = useFormik({  
    initialValues: {
      nome: state ? state.usuario.nome : ""
    },
    onSubmit: async values => {
      if(!!id) {
        await putUsuarios({
          id,
          nome: values.nome
        });
        history.push("/usuarios");
        return
      }
      if(values.nome) {
        await postUsuarios(values.nome);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Usuário cadastrado',
          showConfirmButton: false,
          timer: 1500
        })
        history.push("/usuarios");
      }
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  return (
      <Container
        title="Cadastrar novo usuário"
        size="form"
      >
        <Form onSubmit={formik.handleSubmit} style={{padding: '15px',overflowY: "scroll"}}>
          <Form.Group className="mb-2">
            <Styled.ProfileLabel>Nome</Styled.ProfileLabel>
            <Form.Control
              id="nome"
              name="nome"
              placeholder="Digite o nome do usuário"
              onChange={formik.handleChange}            
              isValid={formik.touched.nome && !formik.errors.nome}
              isInvalid={formik.errors.nome}
            />
          </Form.Group>
          
          {AppError}
          <Button style={{backgroundColor: '#272343'}} variant="primary" type="submit">
            Cadastrar usuário
          </Button>
        </Form> 
      </Container>
  );
}

export default NovoUsuario;