import React, {useEffect} from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../hooks';
import {changeTheme, ThemeState} from '../../store/theme';
import i18next from 'i18next';
import { FAB } from 'react-native-elements';
import { HistoryList } from '@/components';

const HistoryContact = ({navigation} : any) => {
  const {t} = useTranslation(['example', 'welcome']);
  const {Common, Fonts, Gutters, Layout,Colors ,Images, darkMode: isDark} = useTheme();
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
      <View style= {[Layout.fullSize, Gutters.tinyMargin]}>
        <HistoryList />
      </View>
      <FAB
        visible={true}
        onPress={() =>{
          navigation.navigate("AddContact")
        }}
        placement="right"
        title="Add Contact"
        icon={{ name: 'add', color: 'white' }}
        color= {Colors.blue}
      />
    </ScrollView>
  );

}

export default HistoryContact;

