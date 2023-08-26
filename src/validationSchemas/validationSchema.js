
import * as yup from 'yup';
export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be at most 32 characters')
    .matches(/^[a-zA-Z0-9@$!%*?& -]*$/, 'Only Latin letters are allowed')
    .trim()
    .required('Name is required'),
  email: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      'Invalid email format'
    )
    .required('Email is required'),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be at most 64 characters')
    .matches(/^\S*$/, 'Password cannot contain spaces')
    .matches(
      /^[a-zA-Z0-9@$!%*?& -_#+=]*$/,
      'Password must contain only Latin letters, digits, and certain symbols'
    ),
});
