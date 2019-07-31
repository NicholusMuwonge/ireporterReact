import { combineReducers } from 'redux';
import SignUpReducers from './SignupReducers';
import SignInReducers from './SignInReducer';
import recordsReducer from './GetRecordsReducer';


export default combineReducers({
  SignUpReducers,
  SignInReducers,
  recordsReducer,
});
