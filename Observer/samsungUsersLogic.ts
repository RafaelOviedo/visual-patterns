import { ConcreteObserverB } from "./observer";
import { publisherCard } from "./main";

export function runSamsungUsersLogic() {


  ////////////////////// IPHONE USER 1 /////////////////////////


  const samsungUserEl1 = document.getElementById('samsung-user-1');

  const samsungObserverA = new ConcreteObserverB(samsungUserEl1);

  const samsungUser1SubscribeButton = document.getElementById('subscribe-to-samsung-user-1');
  const samsungUser1UnsubscribeButton = document.getElementById('unsubscribe-to-samsung-user-1');

  samsungUser1SubscribeButton.addEventListener('click', () => {
    samsungObserverA.subscribeToPublisher(publisherCard, samsungObserverA);
  });

  samsungUser1UnsubscribeButton.addEventListener('click', () => {
    samsungObserverA.unsubscribeToPublisher(publisherCard, samsungObserverA);
  });


  ////////////////////// IPHONE USER 1 /////////////////////////


  // -------------------------------------------------------------- //


  ////////////////////// IPHONE USER 2 /////////////////////////


  const samsungUserEl2 = document.getElementById('samsung-user-2');

  const samsungObserverB = new ConcreteObserverB(samsungUserEl2);

  const samsungUser2SubscribeButton = document.getElementById('subscribe-to-samsung-user-2');
  const samsungUser2UnsubscribeButton = document.getElementById('unsubscribe-to-samsung-user-2');

  samsungUser2SubscribeButton.addEventListener('click', () => {
    samsungObserverB.subscribeToPublisher(publisherCard, samsungObserverB);
  });

  samsungUser2UnsubscribeButton.addEventListener('click', () => {
    samsungObserverB.unsubscribeToPublisher(publisherCard, samsungObserverB);
  });


  ////////////////////// IPHONE USER 1 /////////////////////////


  // -------------------------------------------------------------- //


  ////////////////////// IPHONE USER 3 /////////////////////////


  const samsungUserEl3 = document.getElementById('samsung-user-3');

  const samsungObserverC = new ConcreteObserverB(samsungUserEl3);

  const samsungUser3SubscribeButton = document.getElementById('subscribe-to-samsung-user-3');
  const samsungUser3UnsubscribeButton = document.getElementById('unsubscribe-to-samsung-user-3');

  samsungUser3SubscribeButton.addEventListener('click', () => {
    samsungObserverC.subscribeToPublisher(publisherCard, samsungObserverC);
  });

  samsungUser3UnsubscribeButton.addEventListener('click', () => {
    samsungObserverC.unsubscribeToPublisher(publisherCard, samsungObserverC);
  });


  ////////////////////// IPHONE USER 1 /////////////////////////


  // -------------------------------------------------------------- //


  ////////////////////// IPHONE USER 4 /////////////////////////


  const samsungUserEl4 = document.getElementById('samsung-user-4');

  const samsungObserverD = new ConcreteObserverB(samsungUserEl4);

  const samsungUser4SubscribeButton = document.getElementById('subscribe-to-samsung-user-4');
  const samsungUser4UnsubscribeButton = document.getElementById('unsubscribe-to-samsung-user-4');

  samsungUser4SubscribeButton.addEventListener('click', () => {
    samsungObserverD.subscribeToPublisher(publisherCard, samsungObserverD);
  });

  samsungUser4UnsubscribeButton.addEventListener('click', () => {
    samsungObserverD.unsubscribeToPublisher(publisherCard, samsungObserverD);
  });


  ////////////////////// IPHONE USER 4 /////////////////////////
}


