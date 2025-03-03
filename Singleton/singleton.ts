class Singleton {
  private static instance: Singleton

  private constructor() {}

  static getInstance(): Singleton {
    if(!Singleton.instance) {
      Singleton.instance = new Singleton();
    };

    return Singleton.instance 
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log('IS SAME INSTANCE', singleton1 === singleton2);