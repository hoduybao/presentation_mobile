import {useTheme} from '@/hooks';
import {Colors} from '@/theme/Variables';
import React from 'react';
import {View, Image, DimensionValue, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = (title: String) => {
  const {Layout} = useTheme();
  return (
    <View
      style={[
        {
          height: 50,
          backgroundColor: Colors.blue,
        },
        Layout.row,
        Layout.alignItemsCenter,
      ]}>
      <Ionicons name="people" size={10} color={Colors.blue} />
      <Text style={{fontSize: 18, fontWeight: 'bold', color: '#FFFFFF'}}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
