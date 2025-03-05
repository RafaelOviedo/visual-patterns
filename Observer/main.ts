import { ConcretePublisher } from './publisher';
import { runIphoneUsersLogic } from './iphoneUsersLogic';
import { runSamsungUsersLogic } from './samsungUsersLogic';

///////////////////////// PUBLISHSER /////////////////////////


const iphonePublishButton = document.getElementById('iphone-publish-button');
const samsungPublishButton = document.getElementById('samsung-publish-button');

const publisherElement = document.getElementById('publisher-card');
export const publisherCard = new ConcretePublisher(publisherElement);


///////////////////////// PUBLISHSER /////////////////////////


// ------------------------------------------------------------ //


runIphoneUsersLogic();
runSamsungUsersLogic();


function publishNewIphonestate() {
  publisherCard.publishNewIphoneState();
}

function publishNewSamsungState() {
  publisherCard.publishNewSamsungState();
}

iphonePublishButton.addEventListener('click', publishNewIphonestate);
samsungPublishButton.addEventListener('click', publishNewSamsungState);



