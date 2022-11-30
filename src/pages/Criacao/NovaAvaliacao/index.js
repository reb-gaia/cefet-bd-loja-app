import React, { useMemo, useEffect } from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Container from '../../../components/Container';
import { Styled } from './styles';
import { useAvaliacoes } from '../../../hooks/contexts/AvaliacoesProvider';
import Swal from 'sweetalert2';

function NovaAvaliacao() {
  const history = useHistory();
  const { id } = useParams()
  const { state } = useLocation()

  const { error, postAvaliacoes, putAvaliacoes } = useAvaliacoes();
     
  useEffect(() => {
    console.log(state);
  });

  const formik = useFormik({  
    initialValues: {
      id_compra: state ? state.avaliacao.id_compra : "",
      id_app: state ? state.avaliacao.id_app : "",
      id_user: state ? state.avaliacao.id_user : "",
      nota: state ? state.avaliacao.nota : "",
    },
    onSubmit: async values => {
      if(!!id) {
        await putAvaliacoes({
          id,
          id_compra: values.id_compra,
          id_app: values.id_app,
          id_user: values.id_user,
          nota: values.nota
        });
        history.push("/minhas-avaliacoes");
        return
      }
      await postAvaliacoes(values);
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Avaliação cadastrada',
        showConfirmButton: false,
        timer: 1500
      })
      history.push("/minhas-avaliacoes");
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  return (
      <Container
        title="Cadastrar nova avaliação"
        size="form"
      >
        <Form onSubmit={formik.handleSubmit} style={{padding: '15px',overflowY: "scroll"}}>
          <Form.Group className="mb-2">
            <Styled.ProfileLabel>Id Compra</Styled.ProfileLabel>
            <Form.Control
              id="id_compra"
              name="id_compra"
              placeholder="Digite o id da compra"
              onChange={formik.handleChange}            
              isValid={formik.touched.id_compra && !formik.errors.id_compra}
              isInvalid={formik.errors.id_compra}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Styled.ProfileLabel>Id App</Styled.ProfileLabel>
            <Form.Control
              id="id_app"
              name="id_app"
              placeholder="Digite o id do aplicativo"
              onChange={formik.handleChange}            
              isValid={formik.touched.id_app && !formik.errors.id_app}
              isInvalid={formik.errors.id_app}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Styled.ProfileLabel>Id Usuário</Styled.ProfileLabel>
            <Form.Control
              id="id_user"
              name="id_user"
              placeholder="Digite a id do usuário"
              onChange={formik.handleChange}            
              isValid={formik.touched.id_user && !formik.errors.id_user}
              isInvalid={formik.errors.id_user}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Styled.ProfileLabel>Nota</Styled.ProfileLabel>
            <Form.Control
              id="nota"
              name="nota"
              placeholder="Digite sua nota para o aplicativo"
              onChange={formik.handleChange}            
              isValid={formik.touched.nota && !formik.errors.nota}
              isInvalid={formik.errors.nota}
            />
          </Form.Group>
          
          {AppError}
          <Button style={{backgroundColor: '#272343'}} variant="primary" type="submit">
            Cadastrar avaliação
          </Button>
        </Form> 
      </Container>
  );
}

export default NovaAvaliacao;