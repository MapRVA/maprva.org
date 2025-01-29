---
title: Member Projects
permalink: /member-projects/
dropdown_links:
  - link: /projects/opentrailstash/
    label: OpenTrailStash
  - link: /projects/ultra/
    label: Ultra
member_projects:
  - name: Daniel Schep
    links:
      - /projects/opentrailstash/
      - /projects/ultra/
---
Here are some of the projects our members are working on!

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
