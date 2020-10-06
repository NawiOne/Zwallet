import {combineReducers} from 'redux';
import authReducer from './auth';
import contactReducer from './contact';
import transactionReducer from './transaction';

const indexReducer = combineReducers({
  auth: authReducer,
  contact: contactReducer,
  transaction: transactionReducer,
});

export default indexReducer;
