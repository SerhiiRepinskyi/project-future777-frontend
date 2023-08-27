import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { useParams} from 'react-router-dom';

const AuthPage = () => {
  const { id } = useParams();



  return (
    <>
      {id === 'register' && <RegisterForm  />}
      {id === 'login' && <LoginForm />}
    </>
  );
};
export default AuthPage;


