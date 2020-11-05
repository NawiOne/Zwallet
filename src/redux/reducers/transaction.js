import {
  doTransAction,
  clearStatus,
  getSampleHistoryAction,
  getHistoryAction,
  getMoreTransAction,
  setNumNotifAction,
  pending,
  rejected,
  fulfilled,
  notificAction,
  resetNumNotifAction,
  clearAction,
} from '../actions/actionType';

const initialState = {
  data: [],
  dataStatus: [],
  dataNotif: [],
  numOfNotif: 0,
  history: [],
  sampleHistory: [],
  pageInfo: [],
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

    case getSampleHistoryAction + pending:
      return {
        ...state,
        isPending: true,
        isfulfilled: false,
      };
    case getSampleHistoryAction + rejected:
      return {
        ...state,
        isPending: false,
        isRejected: true,
      };
    case getSampleHistoryAction + fulfilled:
      return {
        ...state,
        isPending: false,
        isfulfilled: true,
        sampleHistory: payload.data.data,
      };
    case clearAction:
      return {
        ...state,
        sampleHistory: [],
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
    case getMoreTransAction + pending:
      return {
        ...state,
        isPending: true,
        isfulfilled: false,
      };
    case getMoreTransAction + rejected:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        history: payload.data,
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
        numOfNotif: state.numOfNotif + 1,
      };
    case resetNumNotifAction:
      return {
        ...state,
        numOfNotif: 0,
      };
    case clearStatus:
      return {
        ...state,
        isPending: false,
        isRejected: false,
        isfulfilled: false,
        dataStatus: [],
      };
    default:
      return state;
  }
};

export default transaction;
