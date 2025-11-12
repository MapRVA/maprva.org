---
title: Pedestrian Infrastructure
permalink: /get-involved/pedestrian-infrastructure/
involvement_cards:
  - title: Trace Sidewalks
    description: Help us build a pedestrian map, one line at a time
    link: /projects/sidewalks
  - title: Collect Street Imagery
    description: Use your phone (or borrow a 360 camera) to collect valuable images
    link: /get-involved/street-level-imagery/
  - title: Survey In-person
    description: Validate and update sidewalk data with your smartphone
    link: /get-involved/mobile-surveying/
data_cards:
  - title: MapRVA Data Hub
    description: Download the latest pedestrian layers (and more)
    link: https://data.maprva.org
  - title: OpenTrailMap
    description: A hiking-focused map from OpenStreetMap US
    link: https://opentrailmap.us/#map=15.75/37.529382/-77.4531
---

## Help Improve the Map

Mapping Richmond's pedestrian infrastructure is a monumental task, and we need your help!

{::nomarkdown}
<div class="card-gallery">
{% for card in page.involvement_cards %}
  {% include card.html link=card.link title=card.title description=card.description %}
{% endfor %}
</div>
{:/nomarkdown}

## Access the Data

We strive to provide better visualization and navigation tools to Richmond pedestrians. For now, check out these resources to access our data and see what is possible:

{::nomarkdown}
<div class="card-gallery">
{% for card in page.data_cards %}
  {% include card.html link=card.link title=card.title description=card.description %}
{% endfor %}
</div>
{:/nomarkdown}
