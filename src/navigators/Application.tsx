import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {AddContact} from '../screens';
import {useTheme} from '../hooks';
import {useDispatch} from 'react-redux';
import {getAll, getAllHistory} from '../store/contactAction';

import MainNavigator from './Main';
import {useFlipper} from '@react-navigation/devtools';
import {ApplicationStackParamList} from '../../@types/navigation';
import {ThunkDispatch} from '@reduxjs/toolkit';

const Stack = createStackNavigator<ApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const {Layout, darkMode, NavigationTheme} = useTheme();
  const {colors} = NavigationTheme;
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  useEffect(() => {
    dispatch(getAll());
    dispatch(getAllHistory());
  }, []);

  return (
    <SafeAreaView style={[Layout.fill, {backgroundColor: colors.card}]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
