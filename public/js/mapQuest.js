function initMap() {
L.mapquest.key = 'EJPzNcvqqvMA1f0UGG6nlxrgMR3S3DAj';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [32.87868246660001, -117.2358645444004],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});
L.marker([32.87868246660001, -117.2358645444004]).addTo(map);
}