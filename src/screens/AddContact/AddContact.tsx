import React, {useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Brand} from '../../components';
import {useTheme} from '../../hooks';
import {useLazyFetchOneQuery} from '../../services/modules/users';
import {changeTheme, ThemeState} from '../../store/theme';
import i18next from 'i18next';
import {Colors, FontSize} from '@/theme/Variables';
import Buttons from '@/theme/components/Buttons';

const AddContact = () => {
  const {t} = useTranslation(['example', 'welcome']);
  const {Common, Fonts, Gutters, Layout, Images, darkMode: isDark} = useTheme();
  const dispatch = useDispatch();

  const onChangeTheme = ({theme, darkMode}: Partial<ThemeState>) => {
    dispatch(changeTheme({theme, darkMode}));
  };

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
      ]}>
      <View style={[Layout.fullSize]}>
        <View style={[Layout.col, Layout.fullHeight, Gutters.smallTMargin]}>
          <View style={[Gutters.smallMargin]}>
            <Text
              style={[Fonts.textBold, Fonts.titleSmall, Gutters.tinyBMargin]}>
              First Name
            </Text>
            <TextInput style={styles.input} placeholder="Enter First name" />
          </View>

          <View style={[Gutters.smallMargin]}>
            <Text
              style={[Fonts.textBold, Fonts.titleSmall, Gutters.tinyBMargin]}>
              Last Name
            </Text>
            <TextInput style={styles.input} placeholder="Enter Last name" />
          </View>

          <View style={[Gutters.smallMargin]}>
            <Text
              style={[Fonts.textBold, Fonts.titleSmall, Gutters.tinyBMargin]}>
              Phone Number
            </Text>
            <TextInput style={styles.input} placeholder="Enter Phone number" />
          </View>

          <View style={[Gutters.smallMargin]}>
            <TouchableOpacity style={[styles.button, Layout.alignItemsCenter]}>
                <Text style={styles.appButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    color: Colors.blue,
    backgroundColor: Colors.blue,
    borderRadius: 10,
    height: 50,
    lineHeight: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase"
  }
});

export default AddContact;