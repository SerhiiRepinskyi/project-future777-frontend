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
// import { useRegisterMutation } from 'redux/auth/authApi';


export const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
      setShowPassword(!showPassword);
    };
  
  // const [register] = useRegisterMutation();


  const handleSubmit = async (values, { resetForm }) => {
    console.log(values)
    resetForm()

    
    // try {
    //   const response = await register({
    //     name: values.name,
    //     email: values.email,
    //     password: values.password,
    //   })
     

   
    //   resetForm();
    // } catch (error) {
    //   console.log(error)

    // }
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


