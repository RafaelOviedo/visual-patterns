import { Publisher, Observer } from "./types";
import { ConcretePublisher } from "./publisher";

/**
* Concrete Observers react to the updates issued by the Subject they had been
* attached to.
*/
export class ConcreteObserverA implements Observer {
  // name = 'Observer A';
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  public update(publisher: Publisher): void {
    if (publisher instanceof ConcretePublisher && publisher.state.phoneType === 'iphone') {
      this.element.classList.add('highlight');

      const stateElement = this.element.children[1];
      stateElement.innerHTML = publisher.state.state;
    }
    else {
      this.element.classList.remove('highlight');
    }
  }

  public subscribeToPublisher(publisher: Publisher, observer: Observer) {
    publisher.subscribe(observer)
    const stateElement = this.element.children[4];
    stateElement.innerHTML = 'Subscribed!';
    stateElement.classList.remove('unsubscribed-state');
    stateElement.classList.add('subscribed-state');
  }

  public unsubscribeToPublisher(publisher: Publisher, observer: Observer) {
    publisher.unsubscribe(observer);
    const stateElement = this.element.children[4];
    stateElement.innerHTML = 'Unsubscribed!';
    stateElement.classList.remove('subscribed-state');
    stateElement.classList.add('unsubscribed-state');
  }
}

export class ConcreteObserverB implements Observer {
  // name = 'Observer B';
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  public update(publisher: Publisher): void {
    if (publisher instanceof ConcretePublisher && publisher.state.phoneType === 'samsung') {
      this.element.classList.add('highlight');

      const stateElement = this.element.children[1];
      stateElement.innerHTML = publisher.state.state;
    }
    else {
      this.element.classList.remove('highlight');
    }
  }

  public subscribeToPublisher(publisher: Publisher, observer: Observer) {
    publisher.subscribe(observer)
    const stateElement = this.element.children[4];
    stateElement.innerHTML = 'Subscribed!';
    stateElement.classList.remove('unsubscribed-state');
    stateElement.classList.add('subscribed-state');
  }

  public unsubscribeToPublisher(publisher: Publisher, observer: Observer) {
    publisher.unsubscribe(observer)
    const stateElement = this.element.children[4];
    stateElement.innerHTML = 'Unsubscribed!';
    stateElement.classList.remove('subscribed-state');
    stateElement.classList.add('unsubscribed-state');
  }
}




