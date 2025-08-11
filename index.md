---
layout: page
permalink: /
featured_work:
  - link: /projects/sidewalks/
  - link: /projects/surveillance/
  - link: /projects/water-crisis/
---
# MapRVA

We are a group of mapping enthusiasts in Richmond, Virginia who work to create and share geospatial data of our city using [OpenStreetMap](https://openstreetmap.org).

## Featured Work

{::nomarkdown}
{% assign subitems="" | split: ',' -%}
{% for link in page.featured_work %}
  {% assign item=site.pages | find: "url", link.link %}
  {%- if item -%}
    {%- assign subitems=subitems | push: item -%}
  {%- endif %}
{% endfor %}
{% include item_list.html items=subitems %}
{:/nomarkdown}

## Meetups

MapRVA hosts both in-person and virtual meetups! We're planning our next meetup for late August -- stay tuned or follow along in the [#local-rva Slack channel](https://maprva.org/slack).

### Upcoming Events

- August 21, 2025 @6pm: **Carytown Meetup + Survey Trip!** - Meet at New York Deli
- September 4, 2025 @6pm: **Meetup at Main Library**

### Recent Events

- August 7, 2025: **Transportation Mapping Workshop** _(Joint event with [PlanRVA](https://planrva.org))_
- July 30, 2025: **Mappy Hour: Map Pedestrian Infrastructure in RVA!** _(Hosted by [OpenStreetMap US](https://openstreetmap.us))_
- July 24, 2025: **The Future of Pedestrian and Bike Infrastructure Mapping in RVA** _(Joint event with [PlanRVA](https://planrva.org))_
- July 10, 2025: **Open Mapping in Richmond: A Community Meeting** _(Joint event with [PlanRVA](https://planrva.org))_

### Event Calendar

<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&showCalendars=0&title=MapRVA%20Event%20Calendar&src=bWFwcGluZ3J2YUBnbWFpbC5jb20&color=%23f4511e" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>

## MapRVA In the News

- [🗺️ An easier-to-navigate Richmond speeding map](https://www.chlookout.com/p/yesterday-s-park-house-price-today-s-park-house-price-fccb) _The Church Hill Lookout, August 8, 2025_
- [Stamen at State of the Map US 2025](https://stamen.com/stamen-at-state-of-the-map-us-2025/) _Stamen Design, July 16, 2025_
- [Mapper Highlight: MapRVA](https://openstreetmap.us/news/2025/04/maprva-highlight/) _OpenStreetMap US Staff, Jacob Hall, and Daniel Schep, April 24, 2025_
- [New RVA maps unlocked](https://www.chlookout.com/p/new-rva-maps-unlocked) _The Church Hill Lookout, February 7, 2025_
- [A School Budget Draft, a Water Outage Map, and Local Artwork](https://buttondown.com/CheersRVA/archive/a-school-budget-draft-a-water-outage-map-and/) _Cheers RVA!, January 23, 2025_
- [From pooping outside to brushing with La Croix: how Richmonders survived the water crisis](https://www.axios.com/local/richmond/2025/01/13/richmond-water-crisis-funny-survived) _Axios Richmond, January 13, 2025_
- [Status update: Greater Richmond's water outages](https://www.vpm.org/news/2025-01-07/winter-storm-blair-richmond-henrico-hanover-chesterfield-mutual-aid-help) _VPM News, January 7, 2025_
