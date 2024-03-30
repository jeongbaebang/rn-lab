import { View, Text } from 'react-native';
import React from 'react';
import Consumer from '../lib/Consumer';

/**
 * 알림 구성 페이지
 */
const Notification = () => {
  return (
    <View>
      <Text>Notification</Text>
      <Consumer />
    </View>
  );
};

export default Notification;
