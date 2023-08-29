import { API as authAPI } from './API_Component/authAPI';
import { API as userAPI } from './API_Component/userAPI';
import { API as boardsAPI } from './API_Component/boardsAPI';
import { API as columnsAPI } from './API_Component/columnsAPI';
import { API as cardsAPI } from './API_Component/cardsAPI';


// список всіх ендпонтів які можна використовувати:
//  useRegisterUserMutation,
//   useLoginUserMutation,
//   useLogoutUserMutation,
//   useCurrentUserQuery,
//   useThemeUserMutation,
//   useAvatarUserMutation,
//   useHelpUserMutation,
//   useGetBoardsQuery,
//   useGetBoardByIdQuery,
//   useAddBoardsMutation,
//   useDeleteBoardByIdMutation,
//   useUpdateBoardByIdMutation,
//   useAddColumnMutation,
//   useUpdateColumnByIdMutation,
//   useDeleteColumnByIdMutation,
//   useAddCardMutation,
//   useUpdateCardByIdMutation,
//   useDeleteCardByIdMutation,
//   useUpdateCardColumnByIdMutation/------

export const API = {
  ...authAPI,
  ...userAPI,
  ...boardsAPI,
  ...columnsAPI,
  ...cardsAPI,
};