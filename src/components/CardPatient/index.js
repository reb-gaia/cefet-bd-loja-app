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
        confirmButton: 'btn btn-success m-3',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Você deseja excluir o paciente?',
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
          'Paciente foi excluido!',
          'Sucesso'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Paciente não foi excluido!',
          'Error'
        )
      }
    })
  };

  const handleEdit = async () => {
    history.push(`edit-patient/${patient.id}`, {patient});
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{patient.pessoa.nome}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{patient.pessoa.email} | {patient.pessoa.telefone}</Card.Subtitle>
        <Card.Text>
          {patient.peso} kg | {patient.altura} m | {patient.tipoSanguineo}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default CardPatient;