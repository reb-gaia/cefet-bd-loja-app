import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useEmpresas } from '../../hooks/contexts/EmpresasProvider'
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

function CardEmpresa({empresa}) {

  const history = useHistory();

  const { deleteEmpresas } = useEmpresas();
  const handleDelete = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-3',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Você deseja excluir essa empresa?',
      text: "Caso exclua, será permanente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, quero excluir!',
      cancelButtonText: 'Não, quero cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmpresas({id: empresa.id});
        swalWithBootstrapButtons.fire(
          'Excluida!',
          'Empresa foi excluida!',
          'Sucesso'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Empresa não foi excluida!',
          'Error'
        )
      }
    })
  };

  const handleEdit = async () => {
    history.push(`editar-empresa/${empresa.id}`, {empresa});
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{empresa.nome}</Card.Title>
        <p>Id empresa: {empresa.id}</p>
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

export default CardEmpresa;