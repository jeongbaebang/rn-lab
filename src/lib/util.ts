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
