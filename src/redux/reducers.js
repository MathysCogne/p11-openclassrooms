import { combineReducers } from 'redux';

import authReducer from './authReducer'; 
import nameReducer from './nameReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  name: nameReducer,

});

export default rootReducer;
