import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';

import {useTheme} from '../../hooks';
import ContactList from '@/components/ContactList/ContactList';
import {FAB} from 'react-native-elements';

const MainContact = ({navigation}: any) => {
  const {Gutters, Layout, Colors} = useTheme();

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
      ]}>
      <View style={[Layout.fullSize, Gutters.smallLMargin]}>
        <ContactList navigation={navigation} />
      </View>
      <FAB
        visible={true}
        onPress={() => {
          navigation.navigate('AddContact', {navigation: navigation});
        }}
        placement="right"
        title="Add Contact"
        icon={{name: 'add', color: 'white'}}
        color={Colors.blue}
      />
    </ScrollView>
  );
};

export default MainContact;
