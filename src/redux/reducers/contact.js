import {
  getContactAction,
  getMoreContactAction,
  getContactByIdAction,
  searchContactAction,
  pending,
  rejected,
  fulfilled,
} from '../actions/actionType';
const initalState = {
  contact: {},
  oneContact: {},
  pageInfo: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};
const contact = (state = initalState, {type, payload}) => {
  switch (type) {
    case getContactAction + pending:
      return {
        ...state,
        isPending: true,
      };
    case getContactAction + rejected:
      return {
        ...state,
        isRejected: true,
        isPEnding: false,
      };
    case getContactAction + fulfilled:
      return {
        ...state,
        isPending: false,
        contact: payload.data.data,
        isFulfilled: true,
        pageInfo: payload.data.pageInfo,
      };
    case getMoreContactAction + pending:
      return {
        ...state,
        isPending: true,
      };
    case getMoreContactAction + rejected:
      return {
        ...state,
        isRejected: true,
        isPEnding: false,
      };
    case getMoreContactAction + fulfilled:
      let newData = payload.data.data.map((item) => {
        const dataContact = {
          id: item.id,
          name: item.name,
          phone: item.phone,
          picture: item.picture,
        };
        return dataContact;
      });
      const arr = [...state.contact];
      const newArr = arr.concat(newData);
      return {
        ...state,
        isPending: false,
        contact: newArr,
        isFulfilled: true,
        pageInfo: payload.data.pageInfo,
      };
    case getContactByIdAction:
      return {
        ...state,
        oneContact: {...payload},
      };

    case searchContactAction + pending:
      return {
        ...state,
        isPending: true,
      };
    case searchContactAction + rejected:
      return {
        ...state,
        isRejected: true,
        isPEnding: false,
      };
    case searchContactAction + fulfilled:
      return {
        ...state,
        isPending: false,
        contact: payload.data.data,
        isFulfilled: true,
      };

    default:
      return state;
  }
};

export default contact;
