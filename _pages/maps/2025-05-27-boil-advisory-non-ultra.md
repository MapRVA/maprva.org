---
layout: project
title: May 27 Boil Advisory
blurb: An interactive version of the city's boil advisory map to determine if you are affected.
---

<link href="https://cdn.skypack.dev/maplibre-gl@5.1.0/dist/maplibre-gl.css" rel="stylesheet"/>

<div id="map" style="height:600px;width:100%;"></div>

<script type="module">
  import maplibregl from "https://cdn.skypack.dev/maplibre-gl@5.1.0";
  var map = new maplibregl.Map({
    container: "map",
    style: {
      "version":8,
      "layers":[{"id":"raster","type":"raster","source":"raster"}],
      "sources":{
        "raster": {
          "type":"raster",
          "tiles": ["https://files.trailstash.net/boil-tiles/{z}/{x}/{y}.png"],
          "tileSize":256
        }
      }
    },
    hash: true,
  });
  map.addControl(
    new maplibregl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
  );
</script>
