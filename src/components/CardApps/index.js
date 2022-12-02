import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useApps } from '../../hooks/contexts/AppsProvider'
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

function CardApps({app}) {

  const history = useHistory();

  const { deleteApps } = useApps();
  const handleDelete = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-3',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Você deseja excluir esse aplicativo?',
      text: "Caso exclua, será permanente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, quero excluir!',
      cancelButtonText: 'Não, quero cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteApps({id: app.id});
        swalWithBootstrapButtons.fire(
          'Excluido!',
          'Aplicativo foi excluido!',
          'Sucesso'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Aplicativo não foi excluid!',
          'Error'
        )
      }
    })
  };

  const handleEdit = async () => {
    history.push(`editar-app/${app.id}`, {app});
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{app.nome}</Card.Title>
        <Card.Subtitle className="mb-3 mt-2 text-muted">{app.descricao}</Card.Subtitle>
        <p style={{marginBottom: '0.4rem'}}>Id empresa: {app.nome_empresa}</p>
        <p>R$ {app.valor},00</p>

        <Button variant="primary" onClick={handleDelete}>
          Excluir
        </Button>{" "}
        <Button variant="primary" type="submit" onClick={handleEdit}>
          Editar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardApps;