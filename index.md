---
layout: page
permalink: /
featured_work:
  - link: /projects/water-crisis/
  - link: /projects/sidewalks/
  - link: /projects/opentrailstash/
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

### Recent Events

## MapRVA In the News

- [Status update: Greater Richmond's water outages](https://www.vpm.org/news/2025-01-07/winter-storm-blair-richmond-henrico-hanover-chesterfield-mutual-aid-help) _VPM News, January 7, 2025_
- [From pooping outside to brushing with La Croix: how Richmonders survived the water crisis](https://www.axios.com/local/richmond/2025/01/13/richmond-water-crisis-funny-survived) _Axios Richmond, January 13, 2025_
- [A School Budget Draft, a Water Outage Map, and Local Artwork](https://buttondown.com/CheersRVA/archive/a-school-budget-draft-a-water-outage-map-and/) _Cheers RVA!, January 23, 2025_
