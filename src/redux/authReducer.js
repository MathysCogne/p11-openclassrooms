const initialState = {
   token: '', 
   username: '',
};
 
const authReducer = (state = initialState, action) => {
   switch (action.type) { 
      case 'LOGIN':
         return {
            ...state,
            token: action.payload.token,
            username: action.payload.username,
         };
      case 'LOGOUT':
         return initialState;
      default:
         return state;
   }
};
 
export default authReducer;
 