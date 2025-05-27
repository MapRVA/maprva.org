---
layout: project
title: May 27 Boil Advisory
blurb: An interactive version of the city's boil advisory map to determine if you are affected.
---

**⚠️This map is out of date!⚠️ The city has added more areas to the boil advisory and released their own interactive map:** [https://cor.maps.arcgis.com/apps/instant/basic/index.html?appid=9b75319efe1f4a01925af1d5ee1a7a3d](https://cor.maps.arcgis.com/apps/instant/basic/index.html?appid=9b75319efe1f4a01925af1d5ee1a7a3d)

This map was created out of frustration when the city had only released a static map in their press release.

<link href="https://cdn.skypack.dev/maplibre-gl@5.1.0/dist/maplibre-gl.css" rel="stylesheet"/>

<div id="boil-map" style="height:600px;width:100%;"></div>

<script type="module">
  import maplibregl from "https://cdn.skypack.dev/maplibre-gl@5.1.0";
  var map = new maplibregl.Map({
    container: "boil-map",
    minZoom: 12,
    bounds: [-77.5049099386314,37.526014883959945,-77.4065189650437,37.604288093647014],
    style: "https://tiles.openfreemap.org/styles/liberty",
  });
  map.on("load", () => {
    map.addSource("raster", {
      "type":"raster",
      "tiles": ["https://maprva.org/img/boil-tiles/{z}/{x}/{y}.png"],
      "tileSize":256
    });
    map.addLayer({"id":"raster","type":"raster","source":"raster","paint":{"raster-opacity": 0.75}});
    map.addControl(
      new maplibregl.GeolocateControl({
          positionOptions: {
              enableHighAccuracy: true
          },
          trackUserLocation: true
      })
    );
  });
</script>
