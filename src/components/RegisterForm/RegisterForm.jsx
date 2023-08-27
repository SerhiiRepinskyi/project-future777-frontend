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
import { setCredentials } from 'redux/auth/authSlice';
import Loader from 'components/Loader/Loader';
export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await register({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      console.log(response);
      if (response.token) {
        dispatch(setCredentials(response));
      }

      resetForm();
    } catch (error) {
      console.log(error);
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
  );
};
