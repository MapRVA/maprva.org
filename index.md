---
layout: page
permalink: /
featured_work:
  - link: /projects/sidewalks/
  - link: /projects/surveillance/
  - link: /projects/water-crisis/
---
# MapRVA

We are a group of mapping enthusiasts in Richmond, Virginia who work to create and share geospatial data of our city using [OpenStreetMap](https://openstreetmap.org).

## Featured Work

{::nomarkdown}
{% assign subitems="" | split: ',' -%}
{% for link in page.featured_work %}
  {% assign item=site.pages | find: "url", link.link %}
  {%- if item -%}
    {%- assign subitems=subitems | push: item -%}
  {%- endif %}
{% endfor %}
{% include item_list.html items=subitems %}
{:/nomarkdown}

## Meetups

MapRVA hosts both in-person and virtual meetups!

### Upcoming Events

MapRVA is cohosting a summer talk series with PlanRVA, convening regional leaders in Richmond to discuss open mapping opportunities for our city. The series will take place at the [PlanRVA office above Benchtop Brewing](https://www.google.com/maps/dir/?api=1&destination=424%20Hull%20Street,%20Suite%20300,%20Richmond,%20VA,%2023224) over three events. [Find more information and reserve your spot here!](https://openstreetmap.app.neoncrm.com/nx/portal/neonevents/events?path=%2Fportal%2Fevents%2F20452)

- [July 24, 2025 @ 6:30pm](https://openstreetmap.app.neoncrm.com/nx/portal/neonevents/events?path=%2Fportal%2Fevents%2F20452%2Fstorefront%2F119474): **The Future of Pedestrian and Bike Infrastructure Mapping in RVA**
- [August 7, 2025 @ 6:30pm](https://openstreetmap.app.neoncrm.com/nx/portal/neonevents/events?path=%2Fportal%2Fevents%2F20452%2Fstorefront%2F119475): **Transportation Mapping Workshop**

- [July 30, 2025 @ 8pm](https://openstreetmap.app.neoncrm.com/np/clients/openstreetmap/event.jsp?event=178&): **Mappy Hour: Map Pedestrian Infrastructure in RVA!**

### Recent Events

- [July 10, 2025 @ 6:30pm](https://openstreetmap.app.neoncrm.com/nx/portal/neonevents/events?path=%2Fportal%2Fevents%2F20452%2Fstorefront%2F119473): **Open Mapping in Richmond: A Community Meeting**
## MapRVA In the News

- [Status update: Greater Richmond's water outages](https://www.vpm.org/news/2025-01-07/winter-storm-blair-richmond-henrico-hanover-chesterfield-mutual-aid-help) _VPM News, January 7, 2025_
- [From pooping outside to brushing with La Croix: how Richmonders survived the water crisis](https://www.axios.com/local/richmond/2025/01/13/richmond-water-crisis-funny-survived) _Axios Richmond, January 13, 2025_
- [A School Budget Draft, a Water Outage Map, and Local Artwork](https://buttondown.com/CheersRVA/archive/a-school-budget-draft-a-water-outage-map-and/) _Cheers RVA!, January 23, 2025_
- [New RVA maps unlocked](https://www.chlookout.com/p/new-rva-maps-unlocked) _The Church Hill Lookout, February 7, 2025_
