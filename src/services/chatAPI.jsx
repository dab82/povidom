import axios from 'axios';

// axios.defaults.baseURL = 'https://server-kopa.herokuapp.com';
axios.defaults.baseURL = 'https://my-json-server.typicode.com/dab82/chat';
const URLNorris = 'https://api.chucknorris.io/jokes/random';

export const fetchAllContacts = () => {
  return axios.get(`/contacts`);
};

export const fetchContactById = id => {
  return axios.get(`/contacts/${id}`);
};

export const fetchAddMessage = message => {
  return axios.post(`/messages`, message);
};

export const fetchAllMessages = () => {
  return axios.get(`/messages`);
};

export const fetchChuckNorris = () => {
  return axios.get(`${URLNorris}`);
};
