/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React from 'react';

/**
 * 알림 구성 페이지
 */
const Notification = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
      }}>
      <View style={{ flexDirection: 'row', width: 300 }}>
        <View
          style={{
            width: 100,
            height: 100,

            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            width: 300,
            height: 100,

            backgroundColor: 'blue',
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,

            backgroundColor: 'green',
          }}
        />
      </View>
    </View>
  );
};

export default Notification;
