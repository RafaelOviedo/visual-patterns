import { ConcreteObserverA } from "./observer";
import { publisherCard } from ".";

export function runIphoneUsersLogic() {


  ////////////////////// IPHONE USER 1 /////////////////////////


  const iphoneUserEl1 = document.getElementById('iphone-user-1');

  const iphoneObserverA = new ConcreteObserverA(iphoneUserEl1);

  const iphoneUser1SubscribeButton = document.getElementById('subscribe-to-iphone-user-1');
  const iphoneUser1UnsubscribeButton = document.getElementById('unsubscribe-to-iphone-user-1');

  iphoneUser1SubscribeButton.addEventListener('click', () => {
    iphoneObserverA.subscribeToPublisher(publisherCard, iphoneObserverA);
  });

  iphoneUser1UnsubscribeButton.addEventListener('click', () => {
    iphoneObserverA.unsubscribeToPublisher(publisherCard, iphoneObserverA);
  });


  ////////////////////// IPHONE USER 1 /////////////////////////


  // -------------------------------------------------------------- //


  ////////////////////// IPHONE USER 2 /////////////////////////


  const iphoneUserEl2 = document.getElementById('iphone-user-2');

  const iphoneObserverB = new ConcreteObserverA(iphoneUserEl2);

  const iphoneUser2SubscribeButton = document.getElementById('subscribe-to-iphone-user-2');
  const iphoneUser2UnsubscribeButton = document.getElementById('unsubscribe-to-iphone-user-2');

  iphoneUser2SubscribeButton.addEventListener('click', () => {
    iphoneObserverB.subscribeToPublisher(publisherCard, iphoneObserverB);
  });

  iphoneUser2UnsubscribeButton.addEventListener('click', () => {
    iphoneObserverB.unsubscribeToPublisher(publisherCard, iphoneObserverB);
  });


  ////////////////////// IPHONE USER 2 /////////////////////////


  // -------------------------------------------------------------- //


  ////////////////////// IPHONE USER 3 /////////////////////////


  const iphoneUserEl3 = document.getElementById('iphone-user-3');

  const iphoneObserverC = new ConcreteObserverA(iphoneUserEl3);

  const iphoneUser3SubscribeButton = document.getElementById('subscribe-to-iphone-user-3');
  const iphoneUser3UnsubscribeButton = document.getElementById('unsubscribe-to-iphone-user-3');

  iphoneUser3SubscribeButton.addEventListener('click', () => {
    iphoneObserverC.subscribeToPublisher(publisherCard, iphoneObserverC);
  });

  iphoneUser3UnsubscribeButton.addEventListener('click', () => {
    iphoneObserverC.unsubscribeToPublisher(publisherCard, iphoneObserverC);
  });


  ////////////////////// IPHONE USER 3 /////////////////////////


  // -------------------------------------------------------------- //


  ////////////////////// IPHONE USER 4 /////////////////////////


  const iphoneUserEl4 = document.getElementById('iphone-user-4');

  const iphoneObserverD = new ConcreteObserverA(iphoneUserEl4);

  const iphoneUser4SubscribeButton = document.getElementById('subscribe-to-iphone-user-4');
  const iphoneUser4UnsubscribeButton = document.getElementById('unsubscribe-to-iphone-user-4');

  iphoneUser4SubscribeButton.addEventListener('click', () => {
    iphoneObserverD.subscribeToPublisher(publisherCard, iphoneObserverD);
  });

  iphoneUser4UnsubscribeButton.addEventListener('click', () => {
    iphoneObserverD.unsubscribeToPublisher(publisherCard, iphoneObserverD);
  });


  ////////////////////// IPHONE USER 4 /////////////////////////
}
