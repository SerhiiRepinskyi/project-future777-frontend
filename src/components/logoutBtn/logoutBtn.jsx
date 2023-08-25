// import { useDispatch } from "react-redux";
import sprite from '../../assets/images/sprite.svg';
import { Icon, LogOutBtnStyled, SpanStyled } from './LogoutBtn.styled';
// import { setToken, useLogoutMutation} from "redux/authSlice"
// import { getToken } from 'redux/selectors';

const LogoutBtn = () => {
  // const dispatch = useDispatch();
  // const token = useSelector(getToken);
  // const [logOut] = useLogoutMutation();

  const handleLogout = () => {
    console.log('LogoutBtn clicked');
    // dispatch(setToken(''));
  };

  return (
    <>
      {/* <LogOutBtnStyled onClick={() => dispatch(logOut())}> */}
      <LogOutBtnStyled onClick={handleLogout}>
        <Icon width="32px" height="32px">
          <use href={`${sprite}#icon-logout`} />
        </Icon>
        <SpanStyled>Log out</SpanStyled>
      </LogOutBtnStyled>
    </>
  );
};

export default LogoutBtn;
