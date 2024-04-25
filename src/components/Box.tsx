/* eslint-disable react-native/no-unused-styles */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import WithLog from './Withlog';
import Link from './Link';
import { RootStackParamList, ScreenList } from '../screens/type';
import WithTheme from './WithTheme';
import styleSystem from '@theme/style';

type Props = { text: string; isDarkMode?: boolean };

const Box: React.FC<Props> = ({ text, isDarkMode }) => {
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.box}>
      <Text style={styles.boxFont}>{text}</Text>
    </View>
  );
};

const theme = {
  box: {
    background: 'blue',
    font: {
      color: 'white',
    },
  },
};

const getStyles = (isDarkMode?: boolean) => {
  const {
    background: { primary },
  } = isDarkMode ? styleSystem.color.light : styleSystem.color.dark;

  return StyleSheet.create({
    box: {
      alignItems: 'center',
      backgroundColor: primary,
      borderRadius: 8,
      height: 150,
      justifyContent: 'center',
      width: 150,
    },
    boxFont: {
      color: theme.box.font.color,
      fontSize: 18,
    },
  });
};

const BoxWithLog = WithLog(Box);

const LinkToBox = <K extends ScreenList>(
  screen: K,
  Params?: RootStackParamList[K],
) => Link(WithTheme(Box), screen, Params);

export default Box;
export { BoxWithLog, LinkToBox };
