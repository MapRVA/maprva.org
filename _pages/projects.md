---
title: Projects
dropdown_links:
  - link: /projects/sidewalks/
    label: Sidewalks
links:
  - link: /projects/sidewalks/
---
Here are the projects we're working on.

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
