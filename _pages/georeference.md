---
title: Directional Georeference Tool
---
{::nomarkdown}
<script src='https://unpkg.com/maplibre-gl@5.7.1/dist/maplibre-gl.js'></script>
<link href='https://unpkg.com/maplibre-gl@5.7.1/dist/maplibre-gl.css' rel='stylesheet' />
<style>
#mymap {
  width: 100%;
  height: 50vh;
}
#controls-container {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 10px;
}
#coordinate-inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.input-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.input-row label {
  font-weight: bold;
  min-width: 80px;
  font-size: 14px;
}
.coordinate-input, #direction-input {
  font-family: monospace;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 10ch;
}
.coordinate-input:focus, #direction-input:focus {
  outline: none;
  border-color: #666;
}
#direction-input {
  width: 12ch;
}
#direction-input.inactive {
  background-color: #f5f5f5;
  color: #999;
}
#reset-direction {
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  font-size: 12px;
  margin-left: 8px;
}
#reset-direction:hover {
  background-color: #f0f0f0;
}
#joystick-container {
  position: relative;
  width: 100px;
  height: 100px;
  background: #e0e0e0;
  border: 2px solid #888;
  border-radius: 50%;
  cursor: pointer;
}
#joystick-handle {
  width: 20px;
  height: 20px;
  background: #333;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: grab;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
#joystick-handle:active {
  cursor: grabbing;
}
#copy-data {
  margin-top: 20px;
  padding: 8px 16px;
  background-color: #007cba;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
#copy-data:hover {
  background-color: #005a87;
}
#copy-data:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>

<div id="mymap"></div>
<div id="controls-container">
  <div id="coordinate-inputs">
    <div class="input-row">
      <label for="latitude-input">Latitude:</label>
      <input type="text" id="latitude-input" class="coordinate-input" placeholder="Type or click on map">
    </div>
    <div class="input-row">
      <label for="longitude-input">Longitude:</label>
      <input type="text" id="longitude-input" class="coordinate-input" placeholder="Type or click on map">
    </div>
    <div class="input-row">
      <label for="direction-input">Direction:</label>
      <input type="text" id="direction-input" placeholder="e.g. 300">
      <button type="button" id="reset-direction" title="Remove direction">✕</button>
    </div>
  </div>
  <div id="joystick-container">
    <div id="joystick-handle"></div>
  </div>
</div>
<button type="button" id="copy-data" disabled>Copy Data</button>

<script>
var map = new maplibregl.Map({
    container: 'mymap',
    style: 'https://styles.trailsta.sh/openmaptiles-osm.json',
    center: [-77.43916, 37.54376],
    zoom: 13
});

var latitudeInput = document.getElementById('latitude-input');
var longitudeInput = document.getElementById('longitude-input');
var directionInput = document.getElementById('direction-input');
var joystickContainer = document.getElementById('joystick-container');
var joystickHandle = document.getElementById('joystick-handle');
var copyButton = document.getElementById('copy-data');

var pinPlaced = false;
var currentDirection = null;
var isDragging = false;

map.getCanvas().style.cursor = 'crosshair';

function updateCoordinates(lng, lat) {
    latitudeInput.value = lat.toFixed(6);
    longitudeInput.value = lng.toFixed(6);
    copyButton.disabled = false;
}

function updateDirection(direction) {
    currentDirection = direction;

    if (direction !== null) {
        directionInput.value = Math.round(direction) + '°';
        directionInput.classList.remove('inactive');
    } else {
        directionInput.value = '';
        directionInput.classList.add('inactive');
        updateJoystickHandle(0, 0);
    }

    // Update pin direction
    if (pinPlaced) {
        var currentData = map.getSource('pin')._data;
        if (currentData.features.length > 0) {
            if (direction !== null) {
                currentData.features[0].properties.direction = direction;
            } else {
                delete currentData.features[0].properties.direction;
            }
            map.getSource('pin').setData(currentData);
        }
    }
}

function updateJoystickHandle(x, y) {
    var maxRadius = 40;
    var distance = Math.sqrt(x * x + y * y);

    if (distance > maxRadius) {
        var ratio = maxRadius / distance;
        x *= ratio;
        y *= ratio;
    }

    joystickHandle.style.transform = 'translate(calc(-50% + ' + x + 'px), calc(-50% + ' + y + 'px))';
}

function updatePinLocation(lng, lat, direction) {
    if (!map.getSource('pin')) return;

    var properties = {};
    if (direction !== null) {
        properties.direction = direction;
    }

    map.getSource('pin').setData({
        'type': 'FeatureCollection',
        'features': [{
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [lng, lat]
            },
            'properties': properties
        }]
    });

    map.setCenter([lng, lat]);
}

function handleJoystickMove(clientX, clientY) {
    if (!pinPlaced) return;

    var rect = joystickContainer.getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;
    var x = clientX - centerX;
    var y = clientY - centerY;

    // Calculate direction (0° is north)
    var angle = Math.atan2(y, x) * 180 / Math.PI;
    var direction = (angle + 90) % 360;
    if (direction < 0) direction += 360;

    updateDirection(direction);
    updateJoystickHandle(x, y);
}

map.on('load', async () => {
    const image = await map.loadImage('https://maprva.org/img/surveillance-direction.png');
    map.addImage('surveillance-direction', image.data);

    map.addSource('pin', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': []
        }
    });

    map.addLayer({
        'id': 'pin-circle',
        'type': 'circle',
        'source': 'pin',
        'paint': {
            'circle-radius': 5
        }
    });

    map.addLayer({
        'id': 'pin-symbol',
        'type': 'symbol',
        'source': 'pin',
        'layout': {
            'icon-image': 'surveillance-direction',
            'icon-overlap': 'always',
            'icon-size': {
                'stops': [[5, 0.3], [15, 1]]
            },
            'icon-rotate': ['to-number', ['get', 'direction']]
        },
        'filter': ['has', 'direction']
    });
});

map.on('click', function(e) {
    var lng = e.lngLat.lng;
    var lat = e.lngLat.lat;

    map.getSource('pin').setData({
        'type': 'FeatureCollection',
        'features': [{
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [lng, lat]
            },
            'properties': {}
        }]
    });

    pinPlaced = true;
    updateCoordinates(lng, lat);

    // Maintain current direction when placing new pin
    if (currentDirection !== null) {
        updateDirection(currentDirection);
        var radians = (currentDirection - 90) * Math.PI / 180;
        var x = Math.cos(radians) * 35;
        var y = Math.sin(radians) * 35;
        updateJoystickHandle(x, y);
    }
});

// Mouse events
joystickContainer.addEventListener('mousedown', function(e) {
    e.preventDefault();
    isDragging = true;
    handleJoystickMove(e.clientX, e.clientY);
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        handleJoystickMove(e.clientX, e.clientY);
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

// Touch events
joystickContainer.addEventListener('touchstart', function(e) {
    e.preventDefault();
    isDragging = true;
    handleJoystickMove(e.touches[0].clientX, e.touches[0].clientY);
});

document.addEventListener('touchmove', function(e) {
    if (isDragging) {
        e.preventDefault();
        handleJoystickMove(e.touches[0].clientX, e.touches[0].clientY);
    }
});

document.addEventListener('touchend', function() {
    isDragging = false;
});

// Input handlers
latitudeInput.addEventListener('change', function() {
    var lat = parseFloat(this.value);
    var lng = parseFloat(longitudeInput.value);
    if (!isNaN(lat) && !isNaN(lng) && lat >= -90 && lat <= 90) {
        updatePinLocation(lng, lat, currentDirection);
        pinPlaced = true;
    }
});

longitudeInput.addEventListener('change', function() {
    var lng = parseFloat(this.value);
    var lat = parseFloat(latitudeInput.value);
    if (!isNaN(lng) && !isNaN(lat) && lng >= -180 && lng <= 180) {
        updatePinLocation(lng, lat, currentDirection);
        pinPlaced = true;
    }
});

directionInput.addEventListener('change', function() {
    if (!pinPlaced) return;

    var directionText = this.value.replace('°', '');
    var direction = parseFloat(directionText);

    if (!isNaN(direction)) {
        direction = direction % 360;
        if (direction < 0) direction += 360;

        updateDirection(direction);

        var radians = (direction - 90) * Math.PI / 180;
        var x = Math.cos(radians) * 35;
        var y = Math.sin(radians) * 35;
        updateJoystickHandle(x, y);
    }
});

document.getElementById('reset-direction').addEventListener('click', function() {
    if (!pinPlaced) return;
    updateDirection(null);
});

copyButton.addEventListener('click', function() {
    if (!pinPlaced) return;

    var lng = parseFloat(longitudeInput.value);
    var lat = parseFloat(latitudeInput.value);
    var dir = currentDirection !== null ? Math.round(currentDirection) : '';
    var dataString = lng + '\t' + lat + '\t' + dir;

    navigator.clipboard.writeText(dataString).then(function() {
        var originalText = copyButton.textContent;
        copyButton.textContent = 'Copied!';
        setTimeout(function() {
            copyButton.textContent = originalText;
        }, 1500);
    }).catch(function(err) {
        console.error('Failed to copy: ', err);
        alert('Failed to copy to clipboard');
    });
});
</script>
{:/nomarkdown}
