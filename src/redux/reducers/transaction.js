import {
  doTransAction,
  clearStatus,
  getHistoryAction,
  setNumNotifAction,
  pending,
  rejected,
  fulfilled,
  notificAction,
} from '../actions/actionType';

const initialState = {
  data: [],
  dataStatus: [],
  dataNotif: [],
  numOfNotif: 0,
  history: [],
  isPending: false,
  isRejected: false,
  isfulfilled: false,
};

const transaction = (state = initialState, { type, payload }) => {
  switch (type) {
    case doTransAction + pending:
      return {
        ...state,
        isPending: true,
        isfulfilled: false,
      };
    case doTransAction + rejected:
      return {
        ...state,
        isPending: false,
        isRejected: true,
      };
    case doTransAction + fulfilled:
      return {
        ...state,
        isPending: false,
        isRejected: false,
        isfulfilled: true,
        dataStatus: payload.data.status,
      };
    case getHistoryAction + pending:
      return {
        ...state,
        isPending: true,
        isfulfilled: false,
      };
    case getHistoryAction + rejected:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        history: payload.data,
      };
    case getHistoryAction + fulfilled:
      return {
        ...state,
        isPending: false,
        isfulfilled: true,
        history: payload.data.data,
      };
    case notificAction + pending:
      return {
        ...state,
        isPending: true,
        isfulfilled: false,
      };
    case notificAction + rejected:
      return {
        ...state,
        isRejected: true,
        isPending: false,
      };
    case notificAction + fulfilled:
      return {
        ...state,
        isfulfilled: true,
        isRejected: false,
        isPending: false,
        dataNotif: payload.data.data,
      };
    case setNumNotifAction:
      return {
        ...state,
        numOfNotif: +1,
      };
    case clearStatus:
      return {
        ...state,
        isPending: false,
        isRejected: false,
        isfulfilled: false,
        dataStatus: [],
        numOfNotif: 0,
      };
    default:
      return state;
  }
};

export default transaction;
