import {
  register,
  login,
  update,
  deleteUser,
  getUser,
  getEmail,
  updatePassword,
  resetPassword,
  updatePhone,
} from '../../utils/API';
import {
  registerAction,
  loginAction,
  logoutAction,
  updateAction,
  getUserAction,
  resetPasswordAction,
  getEmailAction,
  clearStatus,
  deleteUserAction,
  updatePassAction,
  updatePhoneAction,
} from './actionType';

export const loginCreator = (email, password) => {
  return {
    type: loginAction,
    payload: login(email, password),
  };
};

export const registerCreator = (username, email, password) => {
  return {
    type: registerAction,
    payload: register(username, email, password),
  };
};

export const logoutCreator = () => {
  return {
    type: logoutAction,
  };
};

export const clearStatusCreator = () => {
  return {
    type: clearStatus,
  };
};

export const updateUserCreator = (username, password, pin, image, id) => {
  return {
    type: updateAction,
    payload: update(username, password, pin, image, id),
  };
};
export const delUserCreator = (email) => {
  return {
    type: deleteUserAction,
    payload: deleteUser(email),
  };
};
export const getUserCreator = (email) => {
  return {
    type: getUserAction,
    payload: getUser(email),
  };
};

export const updatePasCreator = (password, newPassword, email) => {
  return {
    type: updatePassAction,
    payload: updatePassword(password, newPassword, email),
  };
};
export const getEmailCreator = (email) => {
  return {
    type: getEmailAction,
    payload: getEmail(email),
  };
};
export const resetPasswordCreator = (password, email) => {
  return {
    type: resetPasswordAction,
    payload: resetPassword(password, email),
  };
};
export const updatePhoneCreator = (phone, email) => {
  return {
    type: updatePhoneAction,
    payload: updatePhone(phone, email),
  };
};
