---
layout: page
permalink: /
featured_projects: 
  - link: /projects/sidewalks/
---
# MapRVA

We are a group of mapping enthusiasts in Richmond, Virginia who work to create and share geospatial data of our city using [OpenStreetMap](https://openstreetmap.org).

## Featured Projects

{::nomarkdown}
{% assign subitems="" | split: ',' -%}
{% for link in page.featured_projects %}
  {% assign item=site.pages | find: "url", link.link %}
  {%- if item -%}
    {%- assign subitems=subitems | push: item -%}
  {%- endif %}
{% endfor %}
{% include item_list.html items=subitems %}
{:/nomarkdown}
