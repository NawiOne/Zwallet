import {
  doTransAction,
  getHistoryAction,
  notificAction,
  setNumNotifAction,
} from '../actions/actionType';
import { doTransaction, getHistory, notif } from '../../utils/API';

export const doTransCreator = (
  sender_id,
  receiver_id,
  transaction_name,
  transaction_type,
  amount,
  note,
  date,
  balance,
) => {
  return {
    type: doTransAction,
    payload: doTransaction(
      sender_id,
      receiver_id,
      transaction_name,
      transaction_type,
      amount,
      note,
      date,
      balance,
    ),
  };
};

export const getHistoryCreator = (id) => {
  return {
    type: getHistoryAction,
    payload: getHistory(id),
  };
};
export const notifCreator = (sender, receiver, amount, transaction_type) => {
  return {
    type: notificAction,
    payload: notif(sender, receiver, amount, transaction_type),
  };
};

export const setNumNotifCreator = () => {
  return {
    type: setNumNotifAction,
  };
};
