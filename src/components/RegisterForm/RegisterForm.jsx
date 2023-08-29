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
import { useRegisterMutation } from 'redux/auth/authApi';
import { useDispatch } from 'react-redux';
import { setCredentials, setError } from 'redux/auth/authSlice';
import Loader from 'components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await register({
        name: values.name,
        email: values.email,
        password: values.password,
      }).unwrap();

      if (response && response.token) {
        dispatch(setCredentials(response));
         navigate('/home');
      }

      resetForm();
    } catch (error) {
      if (error.status === 409) {
        console.log('Email is already in use');
      } else if (error.status === 400) {
        console.log('Name field must be filled in');
        dispatch(setError(error));
      } else {
        console.log('An error occurred:', error.data.message);
        dispatch(setError(error));
      }
    }
  };

  return (
    <>
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
                {isLoading && <Loader />}
                <RegisterFormContext
                  showPassword={showPassword}
                  togglePassword={togglePassword}
                />
              </>
            )}
          </Formik>
        </FormWrap>
      </Container>
    </>
  );
};
