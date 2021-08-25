import * as yup from 'yup';

const today = new Date();
today.setHours(0, 0, 0, 0);

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = yup.object({
  name: yup.string().required("O campo nome é obrigatório"),
  phone: yup.string().required("O campo telefone é obrigatório").matches(phoneRegExp, 'Insira um telefone válido'),
  email: yup.string().required("O campo email é obrigatório").email(),
  password: yup.string().required("O campo senha é obrigatório"),

  cep: yup.string().required("O campo CEP é obrigatório"),
  street: yup.string().required("O campo logradouro é obrigatório"),
  district: yup.string().required("O campo bairro é obrigatório"),
  city: yup.string().required("O campo cidade é obrigatório"),
  estado: yup.string().required("O campo estado é obrigatório"),

  isDoctor: yup.string().required("O campo médico é obrigatório"),
  doctorType: yup.string().required("O campo especialidade é obrigatório"),
  startDate: yup.date().required("O campo data de inicio é obrigatório"),
  salary: yup.number().required("O campo salário é obrigatório"),
}); 
 