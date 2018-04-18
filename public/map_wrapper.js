const MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });

  this.markers = [];
};

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    map: this.googleMap,
    position: coords
  });
  this.markers.push(marker);
};

MapWrapper.prototype.addClickListener = function () {
  google.maps.event.addListener(this.googleMap, 'click', (event) =>  {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng()
    this.addMarker({lat, lng});
  });
};


MapWrapper.prototype.addInfoWindow = function () {
  let marker = this.markers[0];
  let infoWindow = new google.maps.InfoWindow({content: `This is window number`})
  marker.addListener('click', (event) => {infoWindow.open(this.googleMap, marker)})
};

MapWrapper.prototype.buttonTeleport = function (newCenter) {
  this.googleMap.setCenter(newCenter)
  const newMarker = new google.maps.Marker({
    map: this.googleMap,
    position: newCenter,
  })
  console.dir(newMarker);
};


// MapWrapper.prototype.addMarkerListener = function () {
//   google.maps.event.addListener(marker, 'click', function(){
//
//   })
//
// };
//
// MapWrapper.prototype.addInfoWindow = function (marker) {
//   let infoWindow = new google.maps.InfoWindow({content: `This is window number: ${counter}`})
//
// };
//
// MapWrapper.prototype.addInfoWindow = function (marker) {
//   counter++;
//     let infoWindow = new google.maps.InfoWindow({content: `This is window number: ${counter}`})
//     marker.
//
//   })
//
//   marker.addListener('click', (event) => {infoWindow.open(this.googleMap, marker)})
// };
