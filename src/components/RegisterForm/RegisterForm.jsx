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

  const handleSubmit = async (value, { resetForm }) => {
    try {
    const {name, email, password} = value
      console.log(name.trim());
      console.log(email.trim());
       console.log(password.trim());
       resetForm();
    } catch (error) {
          console.error('Error submitting form:', error);
  }
    

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


