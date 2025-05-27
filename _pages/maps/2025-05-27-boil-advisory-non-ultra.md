---
layout: project
title: May 27 Boil Advisory
blurb: An interactive version of the city's boil advisory map to determine if you are affected.
---

<link href="https://cdn.skypack.dev/maplibre-gl@5.1.0/dist/maplibre-gl.css" rel="stylesheet"/>

<div id="map" height="600" width="100%"></div>

<script type="module">
  import maplibregl from "https://cdn.skypack.dev/maplibre-gl@5.1.0";
  var map = new maplibregl.Map({
    container: "map",
    style: "./2025-05-27-boil-advisory-style.json",
    hash: true,
  });
</script>
