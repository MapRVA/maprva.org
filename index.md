---
layout: page
permalink: /
featured_work:
  - link: /projects/water-crisis/
  - link: /projects/sidewalks/
  - link: /maps/opentrailstash/
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

## Upcoming Meetups

MapRVA hosts both in-person and virtual meetups! We'll try to keep the list below up-to-date.

- [Jan 13 2025 @ 6pm, New York Deli](https://osmcal.org/event/3388/)
