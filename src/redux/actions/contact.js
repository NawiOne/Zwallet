import {getContact, getMoreContact, searchcontact} from '../../utils/API';
import {
  getContactAction,
  getMoreContactAction,
  getContactByIdAction,
  searchContactAction,
} from '../actions/actionType';

export const getContactCreator = (id) => {
  return {
    type: getContactAction,
    payload: getContact(id),
  };
};
export const getMoreContactCreator = (id,page) => {
  return {
    type: getMoreContactAction,
    payload: getMoreContact(id, page),
  };
};
export const getContactIdCreator = (id, name, phone, picture) => {
  return {
    type: getContactByIdAction,
    payload: {
      id: id,
      username: name,
      phone: phone,
      picture: picture,
    },
  };
};
export const searchContactCreator = (name) => {
  return {
    type: searchContactAction,
    payload: searchcontact(name),
  };
};
