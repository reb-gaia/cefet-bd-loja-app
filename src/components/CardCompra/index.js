import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCompras } from '../../hooks/contexts/ComprasProvider'
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

function CardCompra({compra}) {

  const history = useHistory();

  const { deleteCompras } = useCompras();
  const handleDelete = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-3',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Você deseja excluir essa compra?',
      text: "Caso exclua, será permanente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, quero excluir!',
      cancelButtonText: 'Não, quero cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCompras({id: compra.id});
        swalWithBootstrapButtons.fire(
          'Excluido!',
          'Compra foi excluida!',
          'Sucesso'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Compra não foi excluida!',
          'Error'
        )
      }
    })
  };

  const handleEdit = async () => {
    history.push(`editar-compra/${compra.id}`, {compra});
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Id App: {compra.id_app}</Card.Title>
        <Card.Subtitle className="mb-2 mt-2 text-muted">{compra.descricao}</Card.Subtitle>
        <p style={{marginBottom: '0.4rem'}}>Id User: {compra.id_user}</p>
        <p style={{marginBottom: '0.4rem'}}>Data: {compra.data_compra}</p>
        <p>R$ {compra.valor},00</p>
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

export default CardCompra;