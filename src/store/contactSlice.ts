import {createSlice} from '@reduxjs/toolkit';
const contactsData = [
  {
    id: 1,
    name: 'John Doe',
    phone: '0935366008',
    avatar:
      'https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg',
  },
  {
    id: 2,
    name: 'Jack Cusion',
    phone: '0935366008',
    avatar:
      'https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg',
  },
  // Add more contacts as needed
];
const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    listContact: contactsData,
    listHistory: [],
  },
  reducers: {
    addContact: (state, payload) => {
      //   payload.id = state.listContact[state.listContact.length - 1].id + 1;
      //   payload.avatar =
      //     'https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg';
      state.listContact = state.listContact.push(payload);
    },
    removeContact: (state, payload) => {
      state.listContact = state.listContact.filter(value => {
        return value.id != payload.id;
      });
    },
    // updateContact: (state, payload) => {
    //   state.listContact = state.listContact.filter(value => {
    //     return value.id != payload.id;
    //   });
    // },
  },
});
export default contactSlice.reducer;
