import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useTheme} from '../../hooks';
import {Colors} from '@/theme/Variables';
import {addContact, updateHistory} from '@/store/contactAction';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {RouteProp, useRoute} from '@react-navigation/native';

type AddContactRouteParams = {
  data: any;
  navigation: any;
};

const AddContact = () => {
  const route =
    useRoute<RouteProp<Record<string, AddContactRouteParams>, string>>();
  const {Fonts, Gutters, Layout, darkMode: isDark} = useTheme();
  const {data, navigation} = route.params;

  const [textInputName, setTextInputName] = useState('');
  const [textInputPhone, setTextInputPhone] = useState(data ? data.phone : '');

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleChangePhone = (text: any) => {
    // Update the state with the new text value
    setTextInputPhone(text);
  };

  const handleChangeName = (text: any) => {
    // Update the state with the new text value
    setTextInputName(text);
  };

  const handleAdd = () => {
    // Update the state with the new text value
    const newData = {
      name: textInputName,
      phone: textInputPhone,
      avatar:
        'https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg',
    };

    dispatch(addContact(newData));
    if (data) {
      console.log(data.id);
      const dataUpdate = {
        ...newData,
        id: data.id,
      };
      dispatch(updateHistory(dataUpdate));
    }
    //  data=newData;
    navigation.goBack();
  };

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
      ]}>
      <View style={[Layout.fullSize]}>
        <View style={[Layout.col, Layout.fullHeight, Gutters.smallTMargin]}>
          <View style={[Gutters.smallMargin]}>
            <Text
              style={[Fonts.textBold, Fonts.titleSmall, Gutters.tinyBMargin]}>
              Last Name
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChangeName}
              placeholder="Enter name"
            />
          </View>

          <View style={[Gutters.smallMargin]}>
            <Text
              style={[Fonts.textBold, Fonts.titleSmall, Gutters.tinyBMargin]}>
              Phone Number
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChangePhone}
              placeholder="Enter Phone number">
              {textInputPhone}
            </TextInput>
          </View>

          <View style={[Gutters.smallMargin]}>
            <TouchableOpacity
              style={[styles.button, Layout.alignItemsCenter]}
              onPress={handleAdd}>
              <Text style={styles.appButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    color: Colors.blue,
    backgroundColor: Colors.blue,
    borderRadius: 10,
    height: 50,
    lineHeight: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default AddContact;
