---
title: Get Involved!
permalink: /get-involved/
involvement_tiles:
  - image: /img/get-involved/pedestrian-infrastructure.svg
    link: /projects/sidewalks/
  - image: /img/get-involved/bicycle-infrastructure.svg
    link: /get-involved/bicycle-infrastructure/
  - image: /img/get-involved/road-network.svg
  - image: /img/get-involved/surveillance-devices.svg
    link: /projects/surveillance/
---
MapRVA is powered by volunteers! We are building out guides for on website to help newcomers contribute to our mapping projects.

## I want to map...

{::nomarkdown}
<div class="tile-gallery">
{% for tile in page.involvement_tiles %}
  {% include tile.html image=tile.image link=tile.link %}
{% endfor %}
</div>
{:/nomarkdown}


Dreaming of making an entirely new map of RVA? [Get in touch](/contact) and let's build it together!
