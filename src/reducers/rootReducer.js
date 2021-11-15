import { combineReducers } from "redux";

import { tweetsReducer } from './tweetsReducer';
import { usersReducer } from './usersReducer';

export  const rootReducer = combineReducers({
    tweetsReducer,
    usersReducer
    

  
})