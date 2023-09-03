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
import {
  setError,
  setIsLoggedIn,
  setCredentials,
} from 'redux/auth/authAPISlice';
import Loader from 'components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { loginValidationSchema } from 'validationSchemas/validationSchema';
import { Report } from 'notiflix';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [login, { isLoading }] = useLogInMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const trimmedValues = {
      email: values.email.trim(),
      password: values.password.trim(),
    };

    try {
      const response = await login(trimmedValues);

      if (response.data && response.data.token) {
        dispatch(setCredentials(response.data));
        dispatch(setIsLoggedIn(true));

        Report.success('Login successful', 'Welcome back!', 'Okay');
        navigate('/home');
        resetForm();
      }

      if (response.error) {
        if (response.error.status === 401 || response.error.status === 400) {
        
           Report.failure('Error!', 'Email or password is wrong', 'Okay');
        }
        dispatch(setError(response.error));
      }
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
          validationSchema={loginValidationSchema}
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
