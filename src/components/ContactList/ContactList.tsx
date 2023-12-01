import React from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTheme} from '../../hooks';
import {useSelector} from 'react-redux';

const ContactListItem = ({name, avatar}: any) => {
  const {Common, Fonts, Gutters, Layout, Images, darkMode: isDark} = useTheme();

  return (
    <View
      style={[
        Layout.fullWidth,
        Gutters.tinyMargin,
        Layout.row,
        Layout.alignItemsCenter,
      ]}
      onMagicTap={() => {}}>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <Text style={[Fonts.textBold, Fonts.textRegular]}>{name}</Text>
    </View>
  );
};

const ContactList = ({navigation}: any) => {
  const {listContact} = useSelector((state: any) => state.contactReducer);
  return (
    <FlatList
      data={listContact}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailContact', {
              data: item,
              navigation: navigation,
            });
          }}>
          <ContactListItem {...item} />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 25,
    marginRight: 16,
  },
});

export default ContactList;
