import React from 'react';
import {AddContact, Example} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import {Colors} from '@/theme/Variables';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
    <Tab.Navigator
    screenOptions={() => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName  = '';

        if (true) {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (true) {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen
        name="AddContact"
        component={AddContact}
        options={{
          header: () => CustomAppBar('Add Contact'),
        }}
      />
      <Tab.Screen
        name="Example"
        component={Example}
        options={{
          tabBarLabel: 'Example',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
