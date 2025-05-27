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
    minZoom: 12,
    bounds: [-77.5049099386314,37.526014883959945,-77.4065189650437,37.604288093647014],
    style: {
      "version":8,
      "layers":[{"id":"raster","type":"raster","source":"raster"}],
      "sources":{
        "raster": {
          "type":"raster",
          "tiles": ["https://maprva.org/img/boil-tiles/{z}/{x}/{y}.png"],
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
