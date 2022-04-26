import axios from 'axios';

axios.defaults.baseURL = 'https://povidom-chat.herokuapp.com/';
const URLChuckNorris = 'https://api.chucknorris.io/jokes/random';

export const fetchContacts = () => {
  return axios.get(`/contacts`);
};
// export const fetchAddUser = contact => {
//   return axios.post(`/contacts`, contact);
// };

export const fetchContactById = id => {
  return axios.get(`/contacts/${id}`);
};

export const fetchAddMessage = message => {
  return axios.post(`/messages`, message);
};

export const fetchMessages = () => {
  return axios.get(`/messages`);
};

export const fetchChuckNorris = () => {
  return axios.get(`${URLChuckNorris}`);
};
