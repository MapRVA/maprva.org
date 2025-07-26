---
title: Member Projects
permalink: /member-projects/
dropdown_links:
  - link: /projects/opentrailstash/
    label: OpenTrailStash
  - link: /projects/ultra/
    label: Ultra
  - link: /projects/skyway/
    label: skyway
member_projects:
  - name: Daniel Schep
    links:
      - /projects/opentrailstash/
      - /projects/ultra/
  - name: Jacob Hall
    links:
      - /projects/skyway/
---
These projects are each maintained by a member of MapRVA.

{::nomarkdown}
{% for member in page.member_projects %}
  <h2>{{ member.name }}</h2>
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
