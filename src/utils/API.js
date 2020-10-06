import Axios from 'axios';

export const register = (username, email, password) => {
  const data = {
    username: username,
    email: email,
    password: password,
    id_level: 2,
    balance: 200000,
  };
  const url = 'http://192.168.43.52:2000/auth/register';
  return Axios.post(url, data);
};

export const login = (email, password) => {
  const url = 'http://192.168.43.52:2000/auth/login';
  return Axios.post(url, {
    email: email,
    password: password,
  });
};

export const update = (username, password, pin, image, email) => {
  let data = new FormData();
  if (username !== null) {
    data.append('username', username);
  } else if (password !== null) {
    data.append('password', password);
  } else if (pin !== null) {
    data.append('pin', pin);
  } else if (image !== null) {
    data.append('image', {
      uri: `file://${image.path}`,
      type: image.type,
      name: image.fileName,
      size: image.fileSize,
    });
  }
  data.append('email', email);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };
  const url = 'http://192.168.43.52:2000/auth/update';
  return Axios.patch(url, data, config);
};

export const deleteUser = (email) => {
  const uri = `http://192.168.43.52:2000/auth/delete?email=${email}`;
  return Axios.delete(uri);
};

export const getUser = (email) => {
  const url = `http://192.168.43.52:2000/auth/?email=${email}`;
  return Axios.get(url);
};

export const updatePassword = (password, newPassword, email) => {
  const url = `http://192.168.43.52:2000/auth/updatepass?email=${email}`;
  return Axios.post(url, {
    password: password,
    newPassword: newPassword,
  });
};

export const getContact = (id) => {
  const url = `http://192.168.43.52:2000/contact?id=${id}&page=1&limit=10`;
  return Axios.get(url);
};
export const getMoreContact = (id, page) => {
  const url = `http://192.168.43.52:2000/contact?id=${id}&page=${page}&limit=3`;
  return Axios.get(url);
};

export const searchcontact = (name) => {
  const url = `http://192.168.43.52:2000/contact/search?name=${name}`;
  return Axios.get(url);
};

export const doTransaction = (
  sender_id,
  receiver_id,
  transaction_name,
  transaction_type,
  amount,
  note,
  balance,
) => {
  const data = {
    sender_id: sender_id,
    receiver_id: receiver_id,
    trans_name: transaction_name,
    trans_type: transaction_type,
    amount: amount,
    notes: note,
    balance: balance,
  };
  const url = 'http://192.168.43.52:2000/transaction/dotrans';
  return Axios.post(url, data);
};

export const getHistory = (id) => {
  const url = `http://192.168.43.52:2000/transaction?id=${id}&page=1&limit=20`;
  return Axios.get(url);
};

export const getMoreHistory = (id, page) => {
  const url = `http://192.168.43.52:2000/transaction?id=${id}&page=${page}&limit=5`;
  return Axios.get(url);
};

export const getEmail = (email) => {
  const url = `http://192.168.43.52:2000/auth/getemail?email=${email}`;
  return Axios.get(url);
};
export const resetPassword = (password, email) => {
  const url = `http://192.168.43.52:2000/auth/resetpass?email=${email}`;
  return Axios.post(url, {
    password: password,
  });
};
export const updatePhone = (phone, email) => {
  const url = `http://192.168.43.52:2000/auth/phone?email=${email}`;
  return Axios.patch(url, {
    phone: phone,
  });
};

export const notif = (sender, receiver, amount, trans_type) => {
  const url = 'http://192.168.43.52:2000/transaction/notif';
  return Axios.post(url, {
    sender_id: sender,
    receiver_id: receiver,
    amount: amount,
    transaction_type: trans_type,
  });
};
