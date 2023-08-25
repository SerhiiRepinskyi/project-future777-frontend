import { Formik } from 'formik';
import { validationSchema } from 'validationSchemas/validationSchema';
import { RegisterFormContext } from './RegisterFormContext';

import {
  Container,
  FormWrap,
  Navigation,
  StyledLink,

} from './RegisterForm.styled';
import { useState } from 'react';


export const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
      setShowPassword(!showPassword);
    };

  const handleSubmit = (value, { resetForm }) => {
    const {name, email, password} = value
    console.log(name.trim());
       resetForm();

  };

  return (
    <Container>
      <FormWrap>
        <Navigation>
          <StyledLink to="/auth/register">Registration</StyledLink>
          <StyledLink to="/auth/login">Log In</StyledLink>
        </Navigation>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <>
              <RegisterFormContext
                showPassword={showPassword}
                togglePassword={togglePassword}
              />
            </>
          )}
        </Formik>
      </FormWrap>
    </Container>
  );
};


