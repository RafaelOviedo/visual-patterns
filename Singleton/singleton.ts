/**
* The Singleton class defines an `instance` getter, that lets clients access
* the unique singleton instance.
*/

export class Singleton {
  private static instance: Singleton

  /**
  * The Singleton's constructor should always be private to prevent direct
  * construction calls with the `new` operator.
  */
  private constructor() { }

  /**
  * The static getter that controls access to the singleton instance.
  *
  * This implementation allows you to extend the Singleton class while
  * keeping just one instance of each subclass around.
  */
  static getInstance(element: HTMLElement): Singleton {
    if (!Singleton.instance) {
      element.classList.add('singleton-instantiated')
      Singleton.instance = new Singleton();
    }
    else {
      element.classList.add('singleton-reinstantiated')
      return Singleton.instance;
    }
  }

  someBussinessLogic() {
    console.log(`${Singleton.instance} some logic`)
  }
}

