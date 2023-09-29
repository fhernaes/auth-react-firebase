import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Formato de email no válido')
        .required('Ingresar el email es obligatorio'),
    password: Yup.string().trim()
        .min(6,'Mínimo 6 caracteres')
        .max(20,'Máximo 12 caracteres')
        .required('Ingresar la contraseña es obligatorio'),
    });
