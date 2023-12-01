import React from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '@/theme/Variables';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const ContactListItem = ({id, name, phone, avatar, time, navigation}: any) => {
  const data = {
    id: id,
    phone: phone,
    avatar: avatar,
    time: time,
  };
  const {Common, Fonts, Gutters, Layout, Images, darkMode: isDark} = useTheme();

  return (
    <View
      style={[
        Layout.fullWidth,
        Gutters.tinyMargin,
        Gutters.regularRPadding,
        Layout.row,
      ]}>
      <Image source={{uri: avatar}} style={styles.avatar} />

      <View
        style={[
          Layout.fill,
          Layout.row,
          Layout.alignItemsCenter,
          Layout.justifyContentBetween,
        ]}>
        <Text style={[Fonts.textBold, Fonts.textRegular]}>
          {name ? name : phone}
        </Text>
        <View style={[Layout.row, Layout.alignItemsCenter]}>
          <Text style={[Fonts.textSmall, Fonts.textLight, Gutters.tinyRMargin]}>
            {time}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddContact', {data, navigation});
            }}>
            <Ionicons name="information-circle" size={28} color={Colors.blue} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ContactList = ({navigation}: any) => {
  const {listHistory} = useSelector((state: any) => state.contactReducer);

  return (
    <FlatList
      data={listHistory}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ContactListItem {...item} navigation={navigation} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 50,
    marginRight: 16,
  },
});

export default ContactList;
