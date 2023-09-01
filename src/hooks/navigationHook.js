// import { useDispatch, useSelector } from 'react-redux';
// import { useGetCurrentUserQuery } from 'Services/API_Component/userAPI';
// import { setUserRefresh } from 'redux/auth/authAPISlice'; 
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// export const useNavigation = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const token = useSelector(state => state.auth.token);
//   const lastVisitedPage = localStorage.getItem('lastVisitedPage');
//   const lastVisitedBoard = localStorage.getItem('lastVisitedBoard'); // Отримання номеру останнього відвіданого борду
//   const [hasNavigated, setHasNavigated] = useState(false); 
//   const location = useLocation();

//   console.log('Current location:', location.pathname);

//   const { data: currentUser } = useGetCurrentUserQuery({
//     skip: token === null,
//   });

//   const saveLastBoard = (boardNumber) => {
//   localStorage.setItem('lastVisitedBoard', boardNumber);
//   };
  
//   saveLastBoard(boardNumber);
//   useEffect(() => {
//     console.log('useEffect triggered');
//     if (!hasNavigated) {
//       console.log('Navigation logic started');

//       if (token && currentUser) {
//         console.log('Dispatching setUserRefresh');
//         dispatch(setUserRefresh(currentUser));
//         setHasNavigated(true);

//         if (lastVisitedPage) {
//           console.log('Navigating to lastVisitedPage:', lastVisitedPage);
//           navigate(lastVisitedPage);
//         } else if (lastVisitedBoard) {
//           console.log('Navigating to lastVisitedBoard:', lastVisitedBoard);
//           navigate(`/board/${lastVisitedBoard}`);
//         } else {
//           console.log('Navigating to default page');
//           navigate('/home');
//         }
//       }
//     }

//     localStorage.setItem('lastVisitedPage', location.pathname);
//   }, [token, currentUser, hasNavigated, navigate, dispatch, lastVisitedPage, lastVisitedBoard, location.pathname]);
// }

// export default useNavigation;