import { useDispatch } from 'react-redux';
import sprite from '../../assets/images/sprite.svg';
import { Icon, LogOutBtnStyled, SpanStyled } from './LogoutBtn.styled';
import { useLogOutMutation } from 'redux/auth/authApi';
import { logout, setError, setIsLoggedIn } from 'redux/auth/authSlice';

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
