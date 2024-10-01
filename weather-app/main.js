
import './style.css'


const readForm = () => {
  const location = document.querySelector("#location");

  if (! location.checkValidity() || location.value == "") return null;
  else return location.value;
}

const downloadJSON = (filename, jsonObj) => {
  const jsonString = JSON.stringify(jsonObj, undefined, 2);
  const blob = new Blob([jsonString], { type: 'application/json'});
  const link = document.createElement('a');
  link.download = filename;
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
}

const displayWeather = (jsonWeather) => {
  const weather = document.querySelector('#weather-info');
  const temp = document.createElement('h1');
  const addr = document.createElement('p');
  const conditions = document.createElement('p');
  const humidity = document.createElement('p');
  const precip = document.createElement('p');
  const precipprob = document.createElement('p');
  const windspeed = document.createElement('p');

  temp.textContent = `${jsonWeather.days[0].temp} °C`;
  addr.textContent = jsonWeather.resolvedAddress;
  conditions.textContent = jsonWeather.days[0].conditions;
  humidity.textContent = `Humidity - ${jsonWeather.days[0].humidity}%`;
  precip.textContent = `Rain - ${jsonWeather.days[0].precip}mm - ${jsonWeather.days[0].precipprob}%`;
  windspeed.textContent = `Wind - ${jsonWeather.days[0].windspeed}kph`;

  weather.appendChild(temp);
  weather.appendChild(addr);
  weather.appendChild(conditions);
  weather.appendChild(humidity);
  weather.appendChild(precip);
  weather.appendChild(precipprob);
  weather.appendChild(windspeed);
};

const fetchWeather = (location) => {
  return fetch('/env.json')
  .then(response => response.json())
  .then(config => {

    // Prepare API
    const apiKey = config.API_KEY;
    const request = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}&unitGroup=metric`;

    // Issue API request
    return fetch(request);
  })
  .then(response => response.json());
};

const main = () => {
  const form = document.querySelector("form");
  function submitForm(event){
   event.preventDefault(); // Preventing page refresh
  }
  form.addEventListener('submit', submitForm);
  const app = document.querySelector('#app');
  const btnFetch = document.querySelector('#btn-fetch');
  btnFetch.addEventListener('click', () => {
    const location = readForm(); 
    if (location == null) return;
    const dataPromise = fetchWeather(location);
    dataPromise
      .then(data => {
        console.log(data);
        displayWeather(data);
      })
      .catch(err => {
        console.error(err);
      });
  });
  const btnDownload = document.querySelector('#btn-download');
  btnDownload.addEventListener('click', () => {
    const location = readForm(); 
    if (location == null) return;
    const dataPromise = fetchWeather(location);
    dataPromise
      .then(data => {
        downloadJSON('weather.json', data);
      })
      .catch(err => {
        console.error(err);
      });
  });
};

main();