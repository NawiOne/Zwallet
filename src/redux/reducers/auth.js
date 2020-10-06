import {
  loginAction,
  registerAction,
  logoutAction,
  updateAction,
  clearStatus,
  deleteUserAction,
  getUserAction,
  rejected,
  pending,
  fulfilled,
  updatePassAction,
  getEmailAction,
  resetPasswordAction,
  updatePhoneAction,
} from '../actions/actionType';

const initialState = {
  data: [],
  dataUser: {},
  status: [],
  updatePassword: [],
  email: [],
  isAdmin: false,
  isLogin: false,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};
import AsyncStorage from '@react-native-community/async-storage';
const auth = (state = initialState, {type, payload}) => {
  switch (type) {
    case loginAction + pending:
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
      };
    case loginAction + rejected:
      return {
        ...state,
        status: payload.data.status,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case loginAction + fulfilled:
      let admin = null;
      let login = null;
      if (payload.data.isSuccess) {
        const token = payload.data.data.token;
        AsyncStorage.setItem('token', token);
        if (payload.data.data.id_level === 1) {
          admin = true;
          login = true;
        } else {
          admin = false;
          login = true;
        }
      } else {
        admin = false;
        login = false;
      }
      return {
        ...state,
        status: payload.data.status,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        isRejected: false,
        isAdmin: admin,
        isLogin: login,
      };
    case logoutAction:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        data: [],
        dataUser: {},
        status: [],
      };
    case registerAction + pending:
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
      };
    case registerAction + rejected:
      return {
        ...state,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case registerAction + fulfilled:
      return {
        ...state,
        status: payload.data.status,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        isRejected: false,
        isAdmin: admin,
        isLogin: login,
      };

    case updateAction + pending:
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
      };
    case updateAction + rejected:
      return {
        ...state,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case updateAction + fulfilled:
      return {
        ...state,
        status: payload.data.status,
        isFulfilled: true,
        isPending: false,
        isRejected: false,
        isAdmin: admin,
        isLogin: login,
      };

    case getUserAction + pending:
      return {
        ...state,
        // isPending: true,
        isFulfilled: false,
      };
    case getUserAction + rejected:
      return {
        ...state,
        isRejected: true,
        dataUser: payload,
        isPending: false,
      };
    case getUserAction + fulfilled:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        dataUser: payload.data.data[0],
        isRejected: false,
        isAdmin: admin,
        isLogin: login,
      };

    case updatePassAction + pending:
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
      };
    case updatePassAction + rejected:
      return {
        ...state,
        isRejected: true,
        updatePassword: payload.data.data,
        isPending: false,
      };
    case updatePassAction + fulfilled:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        status: payload.status,
        isRejected: false,
        updatePassword: payload.data.status,
      };
    case getEmailAction + pending:
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
      };
    case getEmailAction + rejected:
      return {
        ...state,
        isRejected: true,
        isPending: false,
        email: payload,
      };
    case getEmailAction + fulfilled:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        isRejected: false,
        email: payload.data.data,
        status: payload.data.status,
      };
    case deleteUserAction + fulfilled:
      return {
        ...state,
      };
    case resetPasswordAction + pending:
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
      };
    case resetPasswordAction + rejected:
      return {
        ...state,
        isRejected: true,
        isPending: false,
      };
    case resetPasswordAction + fulfilled:
      return {
        ...state,
        isPending: false,
        isRejected: false,
        isFulfilled: true,
        status: payload.data.status,
      };
    case updatePhoneAction + pending:
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
      };
    case updatePhoneAction + rejected:
      return {
        ...state,
        isRejected: true,
        isPending: false,
        status: payload.data.status,
      };
    case updatePhoneAction + fulfilled:
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        status: payload.data.status,
      };
    case clearStatus:
      return {
        ...state,
        status: [],
        updatePassword: [],
        email: [],
      };

    default:
      return state;
  }
};

export default auth;
