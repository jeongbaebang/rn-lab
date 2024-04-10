import React from 'react';
import { StyleSheet, View } from 'react-native';

import useTheme from '../theme/useTheme';
import { ScreenProps } from './type';
import { LinkToBox } from '@components/Box';

/**
 * TODO
 *
 * 1. 페이지 네비게이션 HOC 구성 해보기 [v]
 */
const HomeScreen = (_props: ScreenProps) => {
  const { theme } = useTheme();
  const LinkToSettingBox = LinkToBox('Settings');
  const LinkToNotificationBox = LinkToBox('Notification');
  const LinkToFetchBox = LinkToBox('Fetch');

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
