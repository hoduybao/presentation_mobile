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
      
    </ScrollView>
  );

}