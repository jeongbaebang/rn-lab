import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import curry from 'lodash/curry';

// 커링: 다수의 인자를 받는 함수를 하나의 인자만 받는 여러 함수로 나누는 기법
const fetchUserData = (
  endpoint: string,
  nextPromise: (value: Response) => Response | PromiseLike<Response>,
  parameter: string,
) => {
  return fetch(`${endpoint}${parameter}`).then(nextPromise);
};

const curryFetch = curry(fetchUserData);

export default function FetchScreen() {
  useEffect(() => {
    const fetchUserById = curryFetch('https://jsonplaceholder.typicode.com');

    fetchUserById((r) => r.json())('/todos/1').then(console.log);
  });
  return (
    <View>
      <Text>FetchScreen</Text>
    </View>
  );
}
