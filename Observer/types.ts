/**
 * The Subject interface declares a set of methods for managing subscribers.
 */
export interface Publisher {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

/**
* The Observer interface declares the update method, used by subjects.
*/
export interface Observer {
  // name: string;
  element: HTMLElement;
  update(publisher: Publisher): void;
}


