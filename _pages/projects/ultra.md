---
layout: project
title: Ultra
sign: https://ultra.trailsta.sh/og:image.png
image: /img/projects/ultra/screenshot.png
blurb: Ultra is a tool for making maps with MapLibre and datasources such as Overpass, QLever, GeoJSON files, etc. It powers a number of our maps here on maprva.org
buttons:
  - link: https://overpass-ultra.us/
    label: Check it out!
  - link: https://gitlab.com/trailstash/ultra
    label: Source Code
---
## Ultra map queries used on maprva.org

These are some of the Ultra queries used to make maps on maprva.org:

{% for ultra-map in site.ultra-maps %}
  * [{{ ultra-map.title }}](https://overpass-ultra.us/#query=url:{{ ultra-map.url | absolute_url }})
{% endfor %}

{::nomarkdown}
{% include page_people_list.html %}
{:/nomarkdown}
