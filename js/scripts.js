//my access token to use mapboxGL
mapboxgl.accessToken = 'pk.eyJ1Ijoib2xpdmlhbGltb25lIiwiYSI6ImNrNmxmOXNqNzBlZnEzZG52M3dqdTF2anEifQ._jw03o430C3a-tly3N6-DQ';

// this is the initial map focus when the user goes on the website
var initialCenterPoint = [-95.7129, 37.0902]
var initialZoom = 3

// create container to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map-container', //holding the map
  style: 'mapbox://styles/mapbox/light-v10', // light colored basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// unescoData is where the sites with the lat/long are
unescoData.forEach(function(unescoSite) {
  // for each UNESCO site, add a marker to the map with a popup
  new mapboxgl.Marker()
    .setLngLat([unescoSite.longitude, unescoEntry.latitude])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
     .setHTML(`${unescoSite.name}`))
    .addTo(map);
})

// event listeners for the fly to buttons

$('#west').on('click', function() {
  map.flyTo({
    center: [-119.4179, 36.7783],
    zoom: initialZoom
  })
})

$('#hawaii').on('click', function() {

  var hawaiiLngLat = [-155.5828, 19.8968]

  map.flyTo({
    center: hawaiiLngLat,
    zoom: 4
  })
})

$('#east').on('click', function() {

  map.flyTo({
    center: [-77.8936, 34.0352],
    zoom: 2
  })
})

$('#south').on('click', function() {
  map.flyTo({
    center: [-100, 31],
    zoom: 2
  })
})

$('#return').on('click', function() {

  map.flyTo({
    center: initialCenterPoint,
    zoom: initialZoom
  })
})
