/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
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
import {Colors, FontSize} from '@/theme/Variables';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ThunkDispatch} from '@reduxjs/toolkit';

import {editContact} from '../../store/contactAction';

// Define the type for route parameters
type DetailContactRouteParams = {
  data: any;
  navigation: any;
};

const EditContact = () => {
  const route =
    useRoute<RouteProp<Record<string, DetailContactRouteParams>, string>>();
  var {data, navigation} = route.params;

  const {Fonts, Gutters, Layout} = useTheme();
  const [textInputValue, setTextInputValue] = useState(data?.name);
  const [textInputPhone, setTextInputPhone] = useState(data?.phone);

  const handleChange = (text: any) => {
    // Update the state with the new text value
    setTextInputValue(text);
  };
  const handleChangePhone = (text: any) => {
    // Update the state with the new text value
    setTextInputPhone(text);
  };

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleEdit = () => {
    const newData = {...data, name: textInputValue, phone: textInputPhone};

   dispatch(editContact(newData));
   data=newData;
   navigation?.navigate('DetailContact', {data, navigation});
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
              First Name
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              onChangeText={handleChange}>
              {data?.name}
            </TextInput>
          </View>

          <View style={[Gutters.smallMargin]}>
            <Text
              style={[Fonts.textBold, Fonts.titleSmall, Gutters.tinyBMargin]}>
              Phone Number
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Phone number"
              onChange={handleChangePhone}>
              {data?.phone}
            </TextInput>
          </View>

          <View style={[Gutters.smallMargin]}>
            <TouchableOpacity
              style={[styles.button, Layout.alignItemsCenter]}
              onPress={handleEdit}>
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

export default EditContact;
