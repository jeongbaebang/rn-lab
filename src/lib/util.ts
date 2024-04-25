/* eslint-disable @typescript-eslint/no-unused-vars */
// Observer Interface
type Observer = {
  name: string;
  update(message: string): void;
};

class Subject {
  private observers = new Map<string, Observer>();

  public getObserverList() {
    return this.observers.keys();
  }

  public addObserver(observer: Observer): void {
    this.observers.set(observer.name, observer);
  }

  public removeObserver(key: string): void {
    if (this.observers.has(key)) {
      this.observers.delete(key);
    }
  }

  public notifyObservers(message: string): void {
    this.observers.forEach((observer) => {
      observer.update(message);
    });
  }

  public notifyObserver(target: string, message: string): void {
    if (!this.observers.has(target)) {
      throw new Error(`옵저버 객체 없음`);
    }

    this.observers.get(target)?.update(message);
  }
}

class ConcreteObserver implements Observer {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(message: string): void {
    console.log(`${this.name} received message: ${message}`);
  }
}

class LogObserver implements Observer {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(message: string): void {
    console.log(`${this.name} received message: ${message}222`);
  }
}

const subject = new Subject();

const observer1 = new ConcreteObserver('Observer 1');
const observerFetch = new LogObserver('Observer 2');

subject.addObserver(observer1);
subject.addObserver(observerFetch);

const ValueCell = <T>(initialValue: T) => {
  let currentValue = initialValue;
  const observer: ((w: T) => void)[] = [];

  return {
    val: () => {
      return currentValue;
    },
    update: (f: (value: T) => T) => {
      const oldValue = currentValue;
      const newValue = f(oldValue);

      if (oldValue !== newValue) {
        currentValue = newValue;

        observer.forEach((watcher) => {
          watcher(newValue);
        });
      }
    },
    addWatcher: (f: (w: T) => void) => {
      observer.push(f);
    },
  };
};

type UpstreamCell<T> = {
  val: () => T;
  addWatcher: (f: (w: T) => void) => void;
};

const FormulaCell = <T>(upstreamCell: UpstreamCell<T>, f: (v: T) => T) => {
  const myCell = ValueCell(f(upstreamCell.val()));

  upstreamCell.addWatcher((newUpstreamValue) => {
    myCell.update((_currentValue) => {
      return f(newUpstreamValue);
    });
  });

  return {
    val: myCell.val,
    addWatcher: myCell.addWatcher,
  };
};

const shoppingCart = ValueCell<{ name: string; price: number }[]>([]);

shoppingCart.addWatcher(console.log);

shoppingCart.update((arr) => {
  return arr.concat({ name: 'aa', price: 1 });
});
