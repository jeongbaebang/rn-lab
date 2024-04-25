import useTheme from '@theme/useTheme';
import React, { ComponentType } from 'react';

type ComponentProps<P> = P & JSX.IntrinsicAttributes;

const WithTheme = <P,>(Component: ComponentType<P>) => {
  return function HOC_Link(props: ComponentProps<P>) {
    const {
      colorScheme: { isDarkMode },
    } = useTheme();
    const propsWithTheme = {
      ...props,
      isDarkMode,
    };

    return <Component {...propsWithTheme} />;
  };
};

export default WithTheme;
