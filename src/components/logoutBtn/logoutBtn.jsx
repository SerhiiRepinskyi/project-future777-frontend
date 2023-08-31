import { useDispatch } from 'react-redux';
import sprite from '../../assets/images/sprite.svg';
import { Icon, LogOutBtnStyled, SpanStyled } from './logoutBtn.styled';
import { useLogOutMutation } from 'Services/API_Component/authAPI';
import { logout, setError, setIsLoggedIn } from 'redux/auth/authAPISlice';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const [logOut] = useLogOutMutation();

  const handleLogOut = async () => {
    try {
      await logOut().unwrap();
      dispatch(logout());
      dispatch(setIsLoggedIn(false));
    } catch (error) {
      dispatch(setError(error));
    }
  };

  return (
    <>
      {/* <LogOutBtnStyled onClick={() => dispatch(logOut())}> */}
      <LogOutBtnStyled onClick={handleLogOut}>
        <Icon width="32px" height="32px">
          <use href={`${sprite}#icon-logout`} />
        </Icon>
        <SpanStyled>Log out</SpanStyled>
      </LogOutBtnStyled>
    </>
  );
};

export default LogoutBtn;
