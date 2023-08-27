import { Formik } from 'formik';
import { LoginFormContext } from './LoginFormContext';

import {
  Container,
  FormWrap,
  Navigation,
  StyledLink,
} from '../RegisterForm/RegisterForm.styled';
import { useState } from 'react';
import { useLogInMutation } from 'redux/auth/authApi';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'redux/auth/authSlice';
import Loader from 'components/Loader/Loader';


export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [login, { isLoading }] = useLogInMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await login({
        email: values.email,
        password: values.password,
      });

      console.log(response);
      if (response.token) {
        dispatch(setCredentials(response));
      }
    
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
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
        >
          {() => (
            <>
              {isLoading && <Loader />}
              <LoginFormContext
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
