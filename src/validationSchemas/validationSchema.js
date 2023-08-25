// import * as yup from 'yup';

//  export  const validationSchema = yup.object().shape({
//    name: yup
//      .string()
//      .min(3, 'Name must be at least 3 characters')
//      .max(30, 'Name must be at most 20 characters')
//      .matches(
//        /^[А-Яа-яЁёіІїЇґҐa-zA-Z]+([-\s][А-Яа-яЁёіІїЇґҐa-zA-Z]+)*$/,
//        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
//      )
//      .required('Name is required'),
//    email: yup
//      .string()
//      .matches(
//        /.{6,}@mail\.com$/,
//        'Email should end with @mail.com and have at least 6 characters before @'
//      )
//      .required('Email is required'),

//    password: yup
//      .string()
//      .min(8, 'Password should be of minimum 8 characters length')
//      .required('Password is required'),
//  });

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
