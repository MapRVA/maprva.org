---
title: Map Bicycle Infrastructure in Richmond
permalink: /get-involved/bicycle-infrastructure/
involvement_cards:
  - title: Collect Street Imagery
    description: Use your phone (or borrow a 360 camera) to collect valuable images
    link: /get-involved/street-level-imagery/
data_cards:
  - title: OpenTrailStash
    description: A map designed for Richmond cyclists
    link: https://data.maprva.org
---

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
