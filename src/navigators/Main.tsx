import React from 'react';
import {AddContact, EditContact, MainContact} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import HistoryContact from '@/screens/HistoryContact/HistoryContact';
import DetailContact from '@/screens/DetailContact/DetailContact';

const Tab = createBottomTabNavigator();

// Screens names
const HomeName = 'Home';
const historyName = 'History';

// Stack Screens
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Contact" component={MainContact} />
      <HomeStack.Screen name="AddContact" component={AddContact} />
      <HomeStack.Screen name="DetailContact" component={DetailContact} />
      <HomeStack.Screen name="EditContact" component={EditContact} />
    </HomeStack.Navigator>
  );
}

const HistoryStack = createStackNavigator();

function HistoryStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="History" component={HistoryContact} />
      <HomeStack.Screen name="AddContact" component={AddContact} />
    </HomeStack.Navigator>
  );
}

// @refresh reset
const MainNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={HomeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn === HomeName) {
              iconName = focused ? 'person' : 'person-outline';
            } else {
              iconName = focused ? 'time' : 'time-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name={HomeName}
          component={HomeStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={historyName}
          component={HistoryStackScreen}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
