import * as yup from 'yup';

const today = new Date();
today.setHours(0, 0, 0, 0);

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = yup.object({
  name: yup.string().required("O campo nome é obrigatório"),
  email: yup.string().required("O campo email é obrigatório").email(),
  phone: yup.string().required("O campo telefone é obrigatório").matches(phoneRegExp, 'Insira um telefone válido'),
  doctorType: yup.string().required("O campo especialidade é obrigatório"),
  doctor: yup.string().required("O campo médico é obrigatório"),
  date: yup.date().required("O campo data é obrigatório").min(today, 'A data não pode ser no passado'),
  hour: yup.string().required("O campo horário é obrigatório")
}); 
