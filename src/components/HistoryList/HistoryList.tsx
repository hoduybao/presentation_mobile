import React from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '@/theme/Variables';
import {TouchableOpacity} from 'react-native-gesture-handler';

const contactsData = [
  {
    id: '1',
    name: 'John Doe',
    time: '22/11/2022',
    avatar:
      'https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg',
  },
  {
    id: '2',
    name: 'Joshep',
    time: '22/11/2022',
    avatar:
      'https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg',
  },
  // Add more contacts as needed
];

const ContactListItem = ({name, avatar, time}: any) => {
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
        <Text style={[Fonts.textBold, Fonts.textRegular]}>{name}</Text>
        <View style={[Layout.row, Layout.alignItemsCenter]}>
          <Text style={[Fonts.textSmall, Fonts.textLight, Gutters.tinyRMargin]}>
            {time}
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="information-circle" size={28} color={Colors.blue} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ContactList = () => {
  return (
    <FlatList
      data={contactsData}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ContactListItem {...item} />}
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
