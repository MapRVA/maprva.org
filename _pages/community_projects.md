---
title: Our Work
permalink: /projects/
dropdown_links:
  - link: /projects/surveillance/
    label: Mapping Surveillance
  - link: /projects/sidewalks/
    label: Mapping Sidewalks
  - link: /projects/historical-mapping/
    label: Historical Mapping
  - link: /projects/water-crisis/
    label: Water Crisis
links:
  - link: /projects/surveillance/
  - link: /projects/water-crisis/
  - link: /projects/sidewalks/
  - link: /projects/historical-mapping/
member_projects:
  - name: Daniel Schep
    links:
      - /projects/opentrailstash/
      - /projects/ultra/
  - name: Jacob Hall
    links:
      - /projects/skyway/
---
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

---

## Member Projects

These projects are each maintained by a member of MapRVA.

{::nomarkdown}
{% for member in page.member_projects %}
  <h3>{{ member.name }}</h3>
  {% assign subitems="" | split: ',' -%}
  {% for link in member.links %}
    {% assign item=site.pages | find: "url", link %}
    {%- if item -%}
      {%- assign subitems=subitems | push: item -%}
    {%- endif %}
  {% endfor %}
  {% include item_list.html items=subitems %}
{% endfor %}
{:/nomarkdown}
