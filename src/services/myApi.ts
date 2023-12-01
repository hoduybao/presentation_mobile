import axios from './axios';
type ContactType = {
  id: number;
  name: string;
  phone: string;
  avatar: string;
};
type NewContactType = {
  name: string;
  phone: string;
  avatar: string;
};

export const apiContact = () => {
  return axios({url: '/contacts', method: 'get'});
};

export const apiHistory = () => {
  return axios({url: '/history', method: 'get'});
};

export const apiAddContact = async (options: NewContactType) => {
  const response = await axios.post('/contacts/', options);
  return response;
};
export const apiEditContact = async (options: ContactType) => {
  const response = await axios.put(`/contacts/${options.id}`, options);
  return response;
};

export const apiUpdateHistory = async (options: ContactType) => {

  const response = await axios.put(`/history/${options.id}`, options);
  return response;
};

export const deleteContact = (id: number) => {
  return axios({url: `/contacts/${id}`, method: 'delete'});
};
