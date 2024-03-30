import { View, Button } from 'react-native';
import React, { useEffect } from 'react';
import useSubject from './useSubject';
import ObserverComponent from './ObserverComponent';

const Consumer = () => {
  const { publish, subscribe } = useSubject();

  useEffect(() => {
    console.log('publish');
  }, [publish]);

  useEffect(() => {
    console.log('subscribe');
  }, [subscribe]);

  return (
    <View>
      <Button onPress={() => publish('Hello World!')} title="Publish Message" />
      <ObserverComponent subject={subscribe} />
      <ObserverComponent subject={subscribe} />
    </View>
  );
};

export default Consumer;
