import { useDispatch, useSelector} from 'react-redux';
import { useGetCurrentUserQuery } from 'Services/API_Component/userAPI';
import { setUserRefresh } from 'redux/auth/authAPISlice'; 
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useNavigation =  () => {
  const dispatch = useDispatch();
   const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);
  const location = useLocation();
  localStorage.setItem('lastpage', location.pathname);
   
  const { data: currentUser } = useGetCurrentUserQuery({
    skip: token === null,
  });
  
  useEffect(() => {
     if (token && currentUser) {
       dispatch(setUserRefresh(currentUser));
    }
    
  }, [token, currentUser, dispatch, navigate]);




  console.log(currentUser)
  
}

export default useNavigation;

