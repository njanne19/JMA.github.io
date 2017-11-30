$(document).ready(function() {
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
});

function initMap() {
  var options = {
    zoom: 16,
    center: {lat: 42.363501, lng:-71.101620}
  };

  var map = new google.maps.Map(document.getElementById('map'), options);

  var marker = new google.maps.Marker({
    position: {lat: 42.363501, lng:-71.101620},
    map: map
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<h5>Sonia Night Club</h5><h6><a target="_blank" href="https://www.google.com/maps/place/10+Brookline+St,+Cambridge,+MA+02139/@42.3635045,-71.1038091,17z/data=!3m1!4b1!4m5!3m4!1s0x89e377546b0c50fb:0x455ca9dd0551bd4a!8m2!3d42.3635006!4d-71.1016204">10 Brookline St, Cambridge, MA 02139</a></h6><h6>August 19th, 7:00-11:00</h6>'
  });
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });

  var parkMark = new google.maps.Marker({
    position: {lat: 42.365367, lng: -71.101521},
    map: map,
    icon: "https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png"
  });
  var parkInfo = new google.maps.InfoWindow({
    content: '<h5>Event Parking</h5><a target="_blank" href="https://www.google.com/maps/dir//Lot+6,+Bishop+Allen+Dr,+Cambridge,+MA+02139/@42.3635159,-71.1019482,17.12z/data=!4m15!1m6!3m5!1s0x0:0xbae6d67008d20808!2sLot+6!8m2!3d42.3641592!4d-71.1001951!4m7!1m0!1m5!1m1!1s0x89e377537e65e069:0xbae6d67008d20808!2m2!1d-71.1001952!2d42.3641594">Bishop Allen Dr, Cambridge, MA 02139</a>'
  });
  parkMark.addListener('click', function() {
    parkInfo.open(map, parkMark);
  });



}
