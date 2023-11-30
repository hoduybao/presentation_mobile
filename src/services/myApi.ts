import axios from './axios';

export const apiContact = () => {
  return axios({url: '/contacts', method: 'get'});
};

type ContactType = {
  id: number;
  name: string;
  phone: string;
  avatar: string;
};
export const apiEditContact = async (options: ContactType) => {
  const response = await axios.put(`/contacts/${options.id}`, options);
  return response;
};

export const deleteContact = (id: number) => {
  return axios({url: `/contacts/${id}`, method: 'delete'});
};
