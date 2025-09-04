---
title: Get Involved!
permalink: /get-involved/
involvement_cards:
  - title: Pedestrian Infrastructure
    description: Sidewalks, crosswalks, curb ramps...
    link: /get-involved/pedestrian-infrastructure/
  - title: Bicycle Infrastructure
    description: Bike lanes, MTB trails, bike racks...
    link: /get-involved/bicycle-infrastructure/
  - title: Surveillance
    description: Cameras, ALPRs, gunshot detectors...
    link: /get-involved/surveillance/
  - title: Road network
    description: Road geometry, name etymologies, parking lanes...
---
MapRVA is powered by volunteers! We are building out guides for on website to help newcomers contribute to our mapping projects.

## I want to map...

{::nomarkdown}
<div class="card-gallery">
{% for card in page.involvement_cards %}
  {% include card.html link=card.link title=card.title description=card.description %}
{% endfor %}
</div>
{:/nomarkdown}


Dreaming of making an entirely new map of RVA? [Get in touch](/contact) and let's build it together!
