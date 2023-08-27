import { NavLink } from 'react-router-dom';
import TaskCard from 'components/TaskCard/TaskCard';
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
      <TaskCard />
    </>
  );
};

export default WelcomePage;
