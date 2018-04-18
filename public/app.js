document.addEventListener('DOMContentLoaded', function(){

  const mapContainer = document.querySelector('#main-map')

  const center = {lat: 55.946962, lng:-3.201958};
  const newCenter = {lat: 55.960044, lng: -3.201549};

  const mainMap = new MapWrapper(mapContainer, center, 16);

  const button = document.querySelector('#teleport')

  mainMap.addMarker(center);
  mainMap.addMarker({lat: 55.5, lng: -3.5})
  mainMap.addClickListener();
  mainMap.addInfoWindow()

  button.addEventListener('click', (event) => {mainMap.buttonTeleport(newCenter)})

});
