import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

const ObserverComponent = ({
  subject,
}: {
  subject: (observer: React.Dispatch<string>) => void;
}) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = subject(setMessage);

    return unsubscribe;
  }, [subject]);

  return (
    <View>
      <Text>Latest message: {message}</Text>
    </View>
  );
};

export default ObserverComponent;
