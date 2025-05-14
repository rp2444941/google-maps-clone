const map = L.map('map').setView([28.6139, 77.2090], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

map.on('click', function (e) {
  L.marker([e.latlng.lat, e.latlng.lng])
    .addTo(map)
    .bindPopup(`Lat: ${e.latlng.lat.toFixed(3)}, Lng: ${e.latlng.lng.toFixed(3)}`)
    .openPopup();
});

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (pos) {
    const { latitude, longitude } = pos.coords;
    map.setView([latitude, longitude], 13);
    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup("You are here")
      .openPopup();
  });
}
