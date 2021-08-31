import * as yup from 'yup';

export const validationSchema = yup.object({
  cep: yup.string().required("O campo CEP é obrigatório"),
  street: yup.string().required("O campo logradouro é obrigatório"),
  district: yup.string().required("O campo bairro é obrigatório"),
  city: yup.string().required("O campo cidade é obrigatório"),
  estado: yup.string().required("O campo estado é obrigatório"),
});


