import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {useTheme} from '../../hooks';
import {HistoryList} from '@/components';

const HistoryContact = ({navigation}: any) => {
  const {Gutters, Layout, darkMode: isDark} = useTheme();
  const dispatch = useDispatch();

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
      ]}>
      <View style={[Layout.fullSize, Gutters.tinyMargin]}>
        <HistoryList />
      </View>
    </ScrollView>
  );
};

export default HistoryContact;
