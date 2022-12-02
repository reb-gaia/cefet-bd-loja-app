import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useApps } from '../../hooks/contexts/AppsProvider'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useCompras } from '../../hooks/contexts/ComprasProvider';
import moment from 'moment';

function CardAppsCompra({app}) {
  const { id } = useParams()
  const { state } = useLocation()

  const { error, postCompras, putCompras } = useCompras();

  const history = useHistory();

  const mock = {
    id_app: 1,
    id_user: 4, 
    data_compra: moment(new Date()).format("DD/MM/YYYY"), 
    valor: app.valor
  }

  const handleCompra = async () => {
    await postCompras(mock);
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Compra realizada com sucesso',
      showConfirmButton: false,
      timer: 1500
    })
    history.push("/minhas-compras");
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title>{app.nome}</Card.Title>
        <Card.Subtitle className="mb-3 mt-2 text-muted">{app.descricao}</Card.Subtitle>
        <p style={{marginBottom: '0.4rem'}}>Empresa: {app.nome_empresa}</p>
        <p><strong>R$ {app.preco},00</strong></p>
        
        <Button variant="primary" type="submit" onClick={handleCompra}>
          Comprar
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default CardAppsCompra;