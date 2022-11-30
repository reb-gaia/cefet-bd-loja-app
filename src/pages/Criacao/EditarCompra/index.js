import React, { useMemo, useEffect } from 'react';
import { useFormik } from 'formik';
import { Form, Button, FormControl} from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Container from '../../../components/Container';
import { Styled } from './styles';
import { useCompras } from '../../../hooks/contexts/ComprasProvider';
import Swal from 'sweetalert2';

function EditarCompra() {
  const history = useHistory();
  const { id } = useParams()
  const { state } = useLocation()

  const { error, postCompras, putCompras } = useCompras();
     
  useEffect(() => {
    console.log(state);
  });

  const formik = useFormik({  
    initialValues: {
      id_app: state ? state.compra.id_app : "",
      id_user: state ? state.compra.id_user : "",
      data_compra: state ? state.compra.data_compra : "",
      valor: state ? state.compra.valor : ""
    },
    onSubmit: async values => {
      if(!!id) {
        await putCompras({
          id,
          nome: values.nome
        });
        history.push("/minhas-compras");
        return
      }
      await postCompras(values);
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Usuário cadastrado',
        showConfirmButton: false,
        timer: 1500
      })
      history.push("/minhas-compras");
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  return (
      <Container
        title="Editar compra"
        size="form"
      >
        <Form onSubmit={formik.handleSubmit} style={{padding: '15px',overflowY: "scroll"}}>
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
            <Styled.ProfileLabel>Id Usuario</Styled.ProfileLabel>
            <Form.Control
              id="id_user"
              name="id_user"
              placeholder="Digite o id do usuário"
              onChange={formik.handleChange}            
              isValid={formik.touched.id_user && !formik.errors.id_user}
              isInvalid={formik.errors.id_user}
            />
          </Form.Group>

          <Form.Group className="mb-2">
              <Styled.ProfileLabel>Data</Styled.ProfileLabel>
              <FormControl
                id="data_compra"
                name="data_compra"
                type="data_compra"
                data-date-format="DD/MM/YYYY"
                onChange={formik.handleChange}            
                isValid={formik.touched.data_compra && !formik.errors.data_compra}
                isInvalid={formik.errors.data_compra} />
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
            Editar compra
          </Button>
        </Form> 
      </Container>
  );
}

export default EditarCompra;