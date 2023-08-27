import { NavLink } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <>
      <h1>Welcome page</h1>
      <button>
        <NavLink to="/auth/register">Registration</NavLink>
      </button>
      <button>
        <NavLink to="/auth/login">Log In</NavLink>
      </button>
    </>
  );
};

export default WelcomePage;
