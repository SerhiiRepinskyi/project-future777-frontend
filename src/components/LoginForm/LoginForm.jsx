import { Formik } from 'formik';
import { LoginFormContext } from './LoginFormContext';

import {
  Container,
  FormWrap,
  Navigation,
  StyledLink,
} from '../RegisterForm/RegisterForm.styled';
import { useState } from 'react';
import { useLogInMutation } from 'Services/API_Component/authAPI';
import { useDispatch } from 'react-redux';
import { setError, setIsLoggedIn, setCredentials } from 'redux/auth/authAPISlice';
import Loader from 'components/Loader/Loader';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const navigate = useNavigate();
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

      if (response.data && response.data.token) {
        dispatch(setCredentials(response.data));
        dispatch(setIsLoggedIn(true));
        resetForm();
      }

      if (response.error) {
        if (response.error.status === 401 || response.error.status === 400) {
          console.log('Email or password is wrong');
        }
        dispatch(setError(response.error));
      }
navigate('/home');
     
    } catch (error) {
      dispatch(setError(error));
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
