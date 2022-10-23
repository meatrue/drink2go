const DEFAULT_LAT = 59.968322;
const DEFAULT_LNG = 30.317359;
const SCALE = 25;
const PIN_ICON = 'map-pin.svg';

//const mapContainerElement = document.querySelector('#map');
const mapImageElement = document.querySelector('#map img');


const initMap = () => {
  const map = L.map('map')
    .on('load', () => {
      mapImageElement.remove();
    })
    .setView({
      lat: DEFAULT_LAT,
      lng: DEFAULT_LNG,
    }, SCALE);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: `./img/icons/${PIN_ICON}`,
    iconSize: [38, 50],
    iconAnchor: [19, 50],
  });

  const marker = L.marker(
    {
      lat: DEFAULT_LAT,
      lng: DEFAULT_LNG,
    },
    {
      icon: mainPinIcon
    }
  );

  marker.addTo(map);
};


export { initMap };

