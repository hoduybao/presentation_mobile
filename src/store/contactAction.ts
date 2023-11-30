import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiContact, apiEditContact, deleteContact} from '../services/myApi';

type ContactType = {
  id: number;
  name: string;
  phone: string;
  avatar: string;
};

export const getAll = createAsyncThunk(
  'contact/getAll',
  async (data, {rejectWithValue}) => {
    const response = await apiContact();
    if (response?.status !== 200) {
      return rejectWithValue(response?.data);
    }

    return response?.data;
  },
);
export const editContact = createAsyncThunk(
  'contact/edit',
  async (data: ContactType, {rejectWithValue}) => {
    const response = await apiEditContact(data);
    if (response?.status !== 200) {
      return rejectWithValue(response?.data);
    }

    return response?.data;
  },
);

export const deletecontact = createAsyncThunk(
  'contact/delete',
  async (data: number, {rejectWithValue}) => {
    const response = await deleteContact(data);
    if (response?.status !== 200) {
      return rejectWithValue(response?.data);
    }

    return response?.data;
  },
);
