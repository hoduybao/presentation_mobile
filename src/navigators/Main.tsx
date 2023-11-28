import React from 'react';
import {AddContact, Example} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {Colors} from '@/theme/Variables';

const Stack = createStackNavigator();

const CustomAppBar = (title: String) => {
  return (
    <View style={{height: 50, backgroundColor: Colors.blue, display: 'flex', justifyContent: 'center', alignItems: "center" ,flexDirection: "row"}}>
      {/* Nội dung thanh appbar, ví dụ: */}
      <Text style={{fontSize: 18, fontWeight: 'bold', color: '#FFFFFF'}}>
        {title}
      </Text>
    </View>
  );
};

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="Home"
        component={AddContact}
        options={{
          headerShown: true,
          header: () => CustomAppBar("Add Contact"),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
