import React, { useMemo, useEffect } from 'react';
import { useFormik } from 'formik';
import { Form, Button} from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Container from '../../../components/Container';
import { Styled } from './styles';
import { useEmpresas } from '../../../hooks/contexts/EmpresasProvider';
import Swal from 'sweetalert2';

function NovaEmpresa() {
  const history = useHistory();
  const { id } = useParams()
  const { state } = useLocation()

  const { error, postEmpresas, putEmpresas } = useEmpresas();
     
  useEffect(() => {
    console.log(state);
  });

  const formik = useFormik({  
    initialValues: {
      nome: state ? state.empresa.nome : "",
    },
    onSubmit: async values => {
      if(!!id) {
        await putEmpresas({
          id,
          nome: values.nome
        });
        history.push("/empresas");
        return
      }
      await postEmpresas(values);
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Empresa cadastrada',
        showConfirmButton: false,
        timer: 1500
      })
      history.push("/");
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  return (
      <Container
        title="Cadastrar nova empresa"
        size="form"
      >
        <Form onSubmit={formik.handleSubmit} style={{padding: '15px',overflowY: "scroll"}}>
          <Form.Group className="mb-2">
            <Styled.ProfileLabel>Nome</Styled.ProfileLabel>
            <Form.Control
              id="nome"
              name="nome"
              placeholder="Digite o nome da empresa"
              onChange={formik.handleChange}            
              isValid={formik.touched.nome && !formik.errors.nome}
              isInvalid={formik.errors.nome}
            />
          </Form.Group>

          {AppError}
          <Button style={{backgroundColor: '#272343'}} variant="primary" type="submit">
            Cadastrar empresa
          </Button>
        </Form> 
      </Container>
  );
}

export default NovaEmpresa;