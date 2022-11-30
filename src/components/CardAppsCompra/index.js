import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useApps } from '../../hooks/contexts/AppsProvider'
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

function CardAppsCompra({app}) {

  const history = useHistory();

  const handleEdit = async () => {
    history.push(`edit-address/${app.id_app}`, {app});
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{app.nome}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{app.id_empresa}</Card.Subtitle>
        <Card.Text>
          <p>{app.descricao}</p>
          <strong>R$ {app.valor},00</strong>
        </Card.Text>
        <Button variant="primary">
          Comprar
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default CardAppsCompra;