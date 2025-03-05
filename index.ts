const app = document.getElementById('app');

function loadPatternTemplate(route: string) {
  console.log('ROUTE', route);
  fetch(`./${route}/index.html`)
    .then((res) => {
      if (res.ok) {
        // console.log('RES TEXT', res.text);
        return res.text();
      }
    })
    .then((patternTemplate) => {
      console.log('TEMPLATE', patternTemplate);
      app.innerHTML = patternTemplate;
    });
}

const observerButton = document.getElementById('observer-button');

observerButton.addEventListener('click', loadPatternTemplate('Observer') as unknown as EventListenerOrEventListenerObject);
