import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import RegisterUserReducer from './RegisterUserReducer';
import MainReducer from './MainReducer';

export default combineReducers({
  login: LoginReducer,
  register: RegisterUserReducer,
  main: MainReducer
})
