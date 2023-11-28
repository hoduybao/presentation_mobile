import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'; // Hoặc import từ thư viện icon khác

const DetailContact = () => {

  // Function to handle actions like message, call, edit
  const handleMessage = () => {
    // Handle message action
  };

  const handleCall = () => {
    // Handle call action
  };

  const handleEdit = () => {
    // Handle edit action
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{ uri: "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg" }}
        style={{ width: 150, height: 150, borderRadius: 75 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Thai</Text>
      <Text style={{ fontSize: 18, marginTop: 5 }}>0935366006</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity onPress={handleMessage}>
          <Icon name="message" type="ionicons" size={30} style={{ marginRight: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall}>
          <Icon name="call" type="ionicons" size={30} style={{ marginRight: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEdit}>
          <Icon name="edit" type="ionicons" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailContact;