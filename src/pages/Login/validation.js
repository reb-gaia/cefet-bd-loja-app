import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup.string().required("O campo email é obrigatório"),
  password: yup.string().required("O campo senha é obrigatório"),
}); 