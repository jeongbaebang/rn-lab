/* eslint-disable react-native/no-unused-styles */
import {
  View,
  Image,
  StyleSheet,
  AccessibilityRole,
  AccessibilityProps,
} from 'react-native';
import React from 'react';

type A11y = {
  role: AccessibilityRole;
  label: string;
  hint: string;
};

type Avatar = {
  src?: string;
  size: number;
  isDarkMode?: boolean;
  badge?: boolean;
} & Partial<A11y>;

const Avatar: React.FC<Avatar> = (props) => {
  const styles = getStyles(props.size, props.isDarkMode);
  const a11y: AccessibilityProps = {
    accessible: true,
    accessibilityLabel: props.label,
    accessibilityRole: props.role,
    accessibilityHint: props.hint,
  };
  const Badge = (
    <View style={styles.badgeWrap} accessibilityLabel="Avatar Badge">
      <View style={styles.badge} />
    </View>
  );
  /**
   * marginTop 속성 수치와 text 폰트 크기 수치 동적가능할지도
   */
  // const subscription = (
  //   <View style={{ alignItems: 'center', marginTop: 10 }}>
  //     <Text numberOfLines={1} style={{ fontSize: 10 }}>
  //       sdsdfsdf
  //     </Text>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <Image {...a11y} src={props.src} style={styles.image} />
      {props.badge ? Badge : null}
      {/* {subscription} */}
    </View>
  );
};

Avatar.defaultProps = {
  role: 'image',
  label: 'Avatar Image',
  hint: undefined,
  src: undefined,
  size: 50,
};

const getStyles = (size: number, isDarkMode?: boolean) => {
  const badgeWrapSize = size * 0.3;
  const badgeSize = badgeWrapSize * 0.8;
  const badgePosition = size * 0.75;
  const color = {
    background: {
      badge: 'pink',
      badgeWrap: isDarkMode ? 'black' : 'white',
      image: 'gray',
    },
  };

  return StyleSheet.create({
    badge: {
      backgroundColor: color.background.badge,
      borderRadius: badgeSize,
      height: badgeSize,
      width: badgeSize,
    },
    badgeWrap: {
      alignItems: 'center',
      backgroundColor: color.background.badgeWrap,
      borderRadius: badgeWrapSize,
      height: badgeWrapSize,
      justifyContent: 'center',
      left: badgePosition,
      position: 'absolute',
      top: badgePosition,
      width: badgeWrapSize,
    },
    container: {
      width: size,
    },
    image: {
      backgroundColor: color.background.image,
      borderRadius: size,
      height: size,
      width: size,
    },
  });
};

export default Avatar;
