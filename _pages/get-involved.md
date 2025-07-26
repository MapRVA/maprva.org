---
title: Get Involved!
permalink: /get-involved/
opportunities:
 -  link: /projects/sidewalks/
    label: Mapping Sidewalks
---
MapRVA is powered by volunteers! While all of our projects are open to contributions, these are well-documented and ready for a beginner to get involved.

{::nomarkdown}
{% assign subitems="" | split: ',' -%}
{% for link in page.opportunities %}
  {% assign item=site.pages | find: "url", link.link %}
  {%- if item -%}
    {%- assign subitems=subitems | push: item -%}
  {%- endif %}
{% endfor %}
{% include item_list.html items=subitems %}
{:/nomarkdown}
