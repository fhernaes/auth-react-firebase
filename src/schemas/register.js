import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string().trim()
    .min(2, 'Mínimo 6 caracteres')
    .max(10, 'Máximo 10 caracteres')
    .required('Ingreso de nombre obligatorio'),
  email: Yup.string().email("Email no válido").required("Email obligatorio"),
  password: Yup.string()
    .trim()
    .min(6, "Mínimo 6 caracteres")
    .required("Password obligatorio"),
});