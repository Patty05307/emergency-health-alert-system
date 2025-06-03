const alertButton = document.getElementById('sendAlert');
const responseBox = document.getElementById('responseBox');

document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const map = L.map('map').setView([6.5244, 3.3792], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    map.setView([lat, lon], 14);
    L.marker([lat, lon]).addTo(map).bindPopup('You are here').openPopup();
    alertButton.dataset.lat = lat;
    alertButton.dataset.lon = lon;
  });
}

alertButton.addEventListener('click', async () => {
  const lat = alertButton.dataset.lat || '6.5244';
  const lon = alertButton.dataset.lon || '3.3792';

  try {
    const res = await fetch('http://127.0.0.1:8000/api/alert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ latitude: lat, longitude: lon })
    });

    const data = await res.json();
    responseBox.textContent = `🚑 ${data.message}`;
  } catch (error) {
    responseBox.textContent = '⚠️ Failed to send alert. Please try again.';
  }
});