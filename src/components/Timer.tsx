import { View } from 'react-native';
import React, { useEffect, useState } from 'react';

type Props = {
  render: (time: number) => JSX.Element;
};

const Timer: React.FC<Props> = ({ render }) => {
  const TIME = Number.MIN_SAFE_INTEGER;
  const [time, setTime] = useState(TIME);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <View>{render(time)}</View>;
};

export default Timer;
