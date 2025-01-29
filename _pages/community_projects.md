---
title: Get Involved!
permalink: /projects/
dropdown_links:
  - link: /projects/water-crisis/
    label: Water Crisis
  - link: /maps/surveillance/
    label: Mapping Surveillance
  - link: /projects/sidewalks/
    label: Mapping Sidewalks
  - link: /projects/historical-mapping/
    label: Historical Mapping
links:
  - link: /maps/surveillance/
  - link: /projects/water-crisis/
  - link: /projects/sidewalks/
  - link: /projects/historical-mapping/
---
Get involved in making better maps of RVA!

{::nomarkdown}
{% assign subitems="" | split: ',' -%}
{% for link in page.links %}
  {% assign item=site.pages | find: "url", link.link %}
  {%- if item -%}
    {%- assign subitems=subitems | push: item -%}
  {%- endif %}
{% endfor %}
{% include item_list.html items=subitems %}
{:/nomarkdown}
