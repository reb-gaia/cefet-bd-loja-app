import React, { useMemo, useEffect } from 'react';
import { useFormik } from 'formik';
import { Form, Button} from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Container from '../../../components/Container';
import { Styled } from './styles';
import { useApps } from '../../../hooks/contexts/AppsProvider';
import Swal from 'sweetalert2';

function NovoApp() {
  const history = useHistory();
  const { id } = useParams()
  const { state } = useLocation()

  const { error, postApps, putApps } = useApps();
     
  useEffect(() => {
    console.log(state);
  });

  const formik = useFormik({  
    initialValues: {
      id_empresa: state ? state.app.id_empresa : "",
      nome: state ? state.app.nome : "",
      descricao: state ? state.app.descricao : "",
      versao: state ? state.app.versao : "",
      valor: state ? state.app.valor : "",
    },
    onSubmit: async values => {
      if(!!id) {
        await putApps({
          id,
          id_empresa: values.id_empresa,
          nome: values.nome,
          descricao: values.descricao,
          versao: values.versao,
          valor: values.valor,
        });
        history.push("/");
        return
      }
      await postApps(values);
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'App cadastrado',
        showConfirmButton: false,
        timer: 1500
      })
      history.push("/app");
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  return (
      <Container
        title="Cadastrar novo aplicativo"
        size="form"
      >
        <Form onSubmit={formik.handleSubmit} style={{padding: '15px',overflowY: "scroll"}}>
          <Form.Group className="mb-2">
            <Styled.ProfileLabel>Id Empresa</Styled.ProfileLabel>
            <Form.Control
              id="id_empresa"
              name="id_empresa"
              placeholder="Digite o id da empresa"
              onChange={formik.handleChange}            
              isValid={formik.touched.id_empresa && !formik.errors.id_empresa}
              isInvalid={formik.errors.id_empresa}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Styled.ProfileLabel>Nome</Styled.ProfileLabel>
            <Form.Control
              id="nome"
              name="nome"
              placeholder="Digite o nome do aplicativo"
              onChange={formik.handleChange}            
              isValid={formik.touched.nome && !formik.errors.nome}
              isInvalid={formik.errors.nome}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Styled.ProfileLabel>Descrição</Styled.ProfileLabel>
            <Form.Control
              id="descricao"
              name="descricao"
              placeholder="Digite a descrição do aplicativo"
              onChange={formik.handleChange}            
              isValid={formik.touched.descricao && !formik.errors.descricao}
              isInvalid={formik.errors.descricao}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Styled.ProfileLabel>Versão</Styled.ProfileLabel>
            <Form.Control
              id="versao"
              name="versao"
              placeholder="Digite a versão do aplicativo"
              onChange={formik.handleChange}            
              isValid={formik.touched.versao && !formik.errors.versao}
              isInvalid={formik.errors.versao}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Styled.ProfileLabel>Valor</Styled.ProfileLabel>
            <Form.Control
              id="valor"
              name="valor"
              placeholder="Digite o valor do aplicativo"
              onChange={formik.handleChange}            
              isValid={formik.touched.valor && !formik.errors.valor}
              isInvalid={formik.errors.valor}
            />
          </Form.Group>
          
          {AppError}
          <Button style={{backgroundColor: '#272343'}} variant="primary" type="submit">
            Cadastrar aplicativo
          </Button>
        </Form> 
      </Container>
  );
}

export default NovoApp;