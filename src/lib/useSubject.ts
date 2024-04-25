import React, { useCallback, useState } from 'react';

type Observer = React.Dispatch<string>;

export type Subject = {
  subscribe: (observer: Observer) => () => void;
  publish: (message: string) => void;
};

const useSubject = (): Subject => {
  const [observers, setObservers] = useState<Observer[]>([]);

  const subscribe = useCallback((observer: Observer) => {
    setObservers((prev) => [...prev, observer]);

    return () => setObservers((prev) => prev.filter((o) => o !== observer));
  }, []);

  const publish = useCallback(
    (message: string) => {
      observers.forEach((observer) => observer(message));
    },
    [observers],
  );

  return { subscribe, publish };
};

export default useSubject;
