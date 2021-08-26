import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { usePatients } from '../../hooks/contexts/PatientsProvider'
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

function CardPatient({patient}) {
  const history = useHistory();

  const { deletePatients } = usePatients();
  const handleDelete = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Você deseja excluuir esse produto?',
      text: "Caso exclua, será permanente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, quero excluir!',
      cancelButtonText: 'Não, quero cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deletePatients({id: patient.id});
        swalWithBootstrapButtons.fire(
          'Excluido!',
          'Seu produto foi excluido!',
          'Sucesso'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Seu produto foi salvo!',
          'Error'
        )
      }
    })
  };

  const handleEdit = async () => {
    history.push(`edit-patients/${patient.id}`, {patient});
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{patient.cep}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">$ {patient.street}</Card.Subtitle>
        <Card.Text>
          {patient.city}
        </Card.Text>
        <Button variant="primary" onClick={handleDelete}>
          Excluir
        </Button>
        <Button variant="primary" type="submit" onClick={handleEdit}>
          Editar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardPatient;