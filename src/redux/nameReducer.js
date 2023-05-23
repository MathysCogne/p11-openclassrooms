const initialState = {
   username: '',
   firstname: '',
   lastname: '',
};

const nameReducer = (state = initialState, action) => {
   switch (action.type) { 
      case 'SET_USER':
         return {
            ...state,
            username: action.payload.username,
            firstname: action.payload.firstname,
            lastname: action.payload.lastname,
         };
      case 'LOGOUT':
         return initialState;
      default:
         return state;
   }
};
 
export default nameReducer;
 