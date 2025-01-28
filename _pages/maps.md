---
title: Maps
dropdown_links:
  - link: /projects/water-crisis/
    label: Water Crisis
  - link: /maps/surveillance/
    label: Surveillance Devices
  - link: /maps/opentrailstash/
    label: OpenTrailStash
links:
  - link: /maps/surveillance/
  - link: /maps/opentrailstash/
---
Here are maps we've built.

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
