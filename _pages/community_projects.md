---
title: Our Work
permalink: /projects/
dropdown_links:
  - link: /projects/yesterdays/
    label: Yesterdays
  - link: /projects/surveillance/
    label: Mapping Surveillance
  - link: /projects/sidewalks/
    label: Mapping Sidewalks
  - link: /projects/historical-mapping/
    label: Historical Mapping
community_projects:
  - /projects/yesterdays/
  - /projects/surveillance/
  - /projects/sidewalks/
  - /projects/murals/
  - /projects/hrf-plaques/
  - /projects/historical-mapping/
  - /projects/water-crisis/
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
{% for link in page.community_projects %}
  {% assign item=site.pages | find: "url", link %}
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
