---
title: Projects
dropdown_links:
  - link: /projects/sidewalks/
    label: Sidewalks
---
Here are the projects we're currently working on.

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
