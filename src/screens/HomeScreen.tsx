import React from 'react';
import { StyleSheet, View } from 'react-native';

import useTheme from '../theme/useTheme';
import { ScreenProps } from './type';
import { LinkToBox } from '@components/Box';

// i18n.use(initReactI18next).init({

//   resources: {
//     en: {
//       translation: {
//         'Welcome to React': 'Welcome to React and React-i18Next!',
//       },
//     },
//   },

//   lng: 'en',
//   fallbackLng: 'en',
//   interpolation: {
//     escapeValue: false,
//   },

// });

const HomeScreen = (_props: ScreenProps) => {
  const { theme } = useTheme();
  const LinkToSettingBox = LinkToBox('Settings');
  const LinkToNotificationBox = LinkToBox('Notification');
  const LinkToFetchBox = LinkToBox('Fetch');
  const LinkToListBox = LinkToBox('List');

  return (
    <View
      style={[
        styles.homeScreen,
        {
          backgroundColor: theme.color.background.primary,
        },
      ]}>
      <View style={styles.boxContainer}>
        <LinkToSettingBox text="goSetting" />
        <LinkToNotificationBox text="goNotification" />
        <LinkToFetchBox text="goFetch" />
        <LinkToListBox text="goList" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    width: '100%',
  },

  homeScreen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
