---
title: Map Surveillance Devices in Richmond
permalink: /get-involved/surveillance/
involvement_cards:
  - title: Report a camera
    description: Documentation from DeFlock on adding cameras to OSM
    link: https://deflock.me/report
data_cards:
  - title: MapRVA Surveillance Map
    description: Visualization of cameras, gunshot detectors in the Richmond area
    link: /projects/surveillance/
  - title: DeFlock
    description: A nationwide effort to map ALPRs
    link: https://deflock.me/map#map=12/37.536819/-77.445545
---
On this page we'll add information about contributing to surveillance device data in OpenStreetMap

## Access the Data

{::nomarkdown}
<div class="card-gallery">
{% for card in page.data_cards %}
  {% include card.html link=card.link title=card.title description=card.description %}
{% endfor %}
</div>
{:/nomarkdown}

## Help Improve the Map

{::nomarkdown}
<div class="card-gallery">
{% for card in page.involvement_cards %}
  {% include card.html link=card.link title=card.title description=card.description %}
{% endfor %}
</div>
{:/nomarkdown}
