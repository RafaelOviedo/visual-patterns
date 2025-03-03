import { Publisher, Observer } from "./types";

/**
* The Subject (Publisher) owns some important state and notifies observers when the state
* changes.
*/
export class ConcretePublisher implements Publisher {
  public state: any;
  private observers: Observer[] = [];
  private element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  /**
   * The subscription management methods.
   */
  public subscribe(observer: Observer): void {
    const observerExists = this.observers.includes(observer);
    if (observerExists) {
      console.log('Subject: Observer has been subscribed already.');
    }

    this.observers.push(observer);
    console.log(`Subject: Subscribed observer: ${observer.element.children[0].innerHTML}`);
  }

  public unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    console.log(`Subject: Unsuscribed observer: ${observer.element.children[0].innerHTML}`);
  }

  /**
   * Trigger an update in each subscriber.
   */
  public notify(): void {
    console.log('Subject: Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public publishNewIphoneState() {
    const iphoneInput = document.getElementById('iphone-input') as HTMLInputElement;
    const newIphoneState = { state: iphoneInput.value, phoneType: 'iphone' };
    this.state = newIphoneState;

    const stateElement = this.element.querySelector('#iphone-state');
    stateElement.innerHTML = newIphoneState.state;

    iphoneInput.value = '';

    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }

  public publishNewSamsungState() {
    const samsungInput = document.getElementById('samsung-input') as HTMLInputElement;
    const newSamsungState = { state: samsungInput.value, phoneType: 'samsung' };
    this.state = newSamsungState;

    const stateElement = this.element.querySelector('#samsung-state');
    stateElement.innerHTML = newSamsungState.state;

    samsungInput.value = '';

    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }
}
