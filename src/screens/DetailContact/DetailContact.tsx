import {useTheme} from '@/hooks';
import {Colors} from '@/theme/Variables';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements'; // Hoặc import từ thư viện icon khác
import {deletecontact} from '../../store/contactAction';
import {useDispatch} from 'react-redux';

import {ThunkDispatch} from '@reduxjs/toolkit';

// Define the type for route parameters
type DetailContactRouteParams = {
  data: any;
  navigation: any;
};

const DetailContact = () => {
  const route =
    useRoute<RouteProp<Record<string, DetailContactRouteParams>, string>>();
  const {data, navigation} = route.params;
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  // Function to handle actions like message, call, edit
  const handleMessage = () => {
    // Handle message action
  };

  const handleCall = () => {
    // Handle call action
  };

  const handleEdit = () => {
    // Handle edit action
    navigation?.navigate('EditContact', {data, navigation});
  };

  const handleDelete = () => {
    dispatch(deletecontact(data?.id));
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={{uri: data?.avatar}}
        style={{width: 150, height: 150, borderRadius: 75}}
      />
      <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 10}}>
        {data?.name}
      </Text>
      <Text style={{fontSize: 18, marginTop: 5}}>{data?.phone}</Text>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity onPress={handleMessage}>
          <Icon
            name="message"
            type="ionicons"
            size={30}
            style={{marginRight: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall}>
          <Icon
            name="call"
            type="ionicons"
            size={30}
            style={{marginRight: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEdit}>
          <Icon
            name="edit"
            type="ionicons"
            size={30}
            style={{marginRight: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <Icon name="delete" type="ionicons" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailContact;
