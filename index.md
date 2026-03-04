---
layout: page
permalink: /
featured_work:
  - link: /projects/yesterdays/
  - link: /projects/sidewalks/
  - link: /projects/surveillance/
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

MapRVA hosts both in-person and virtual meetups, usually every-other week! Check out our events calendar below, and get in touch with us [via Slack](https://maprva.org/slack). Our calendar is continually updated, so check back often!

### Upcoming Events

- March 12, 2026, 6pm: **MapRVA Meetup at New York Deli**
- March 17, 2026, 10am, Library of Virginia: **MapRVA's Yesterdays**
- March 26, 2026, 6pm, RPL Main Branch: **Invited Seminar: [Dr. Kyle Redican](https://geography.richmond.edu/faculty/kredican), University of Richmond**

### Recent Events

- February 26, 2026, 6pm: **MapRVA Virtual Map & Yap**
- February 18, 2026, 6:30pm, RPL Main Branch, Annex Room: **Mapping surveillance in Richmond**
- January 15, 2026, 6:30pm: **MapRVA Meetup at New York Deli**
- December 6, 2025: **MapRVA Holiday Party**
- October 29, 2025: **Cemetery Mapping Meetup**


### Event Calendar

<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&showCalendars=0&title=MapRVA%20Event%20Calendar&src=bWFwcGluZ3J2YUBnbWFpbC5jb20&color=%23f4511e" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>

## MapRVA In the News

- [weeklyOSM 814](https://weeklyosm.eu/archives/18440#wn814_34154) _weeklyOSM, March 1, 2026_
- [In Church Hill, a mapping maniac is born](https://www.chlookout.com/p/in-church-hill-a-mapping-maniac-is-born) _The Church Hill Lookout, February 13, 2026_
- [Like Google Street View, but for Richmond history](https://www.chlookout.com/p/like-google-street-view-but-for-richmond-history) _The Church Hill Lookout, October 3, 2025_
- [🗺️ An easier-to-navigate Richmond speeding map](https://www.chlookout.com/p/yesterday-s-park-house-price-today-s-park-house-price-fccb) _The Church Hill Lookout, August 8, 2025_
- [Stamen at State of the Map US 2025](https://stamen.com/stamen-at-state-of-the-map-us-2025/) _Stamen Design, July 16, 2025_
- [Mapper Highlight: MapRVA](https://openstreetmap.us/news/2025/04/maprva-highlight/) _OpenStreetMap US Staff, Jacob Hall, and Daniel Schep, April 24, 2025_
- [New RVA maps unlocked](https://www.chlookout.com/p/new-rva-maps-unlocked) _The Church Hill Lookout, February 7, 2025_
- [A School Budget Draft, a Water Outage Map, and Local Artwork](https://buttondown.com/CheersRVA/archive/a-school-budget-draft-a-water-outage-map-and/) _Cheers RVA!, January 23, 2025_
- [From pooping outside to brushing with La Croix: how Richmonders survived the water crisis](https://www.axios.com/local/richmond/2025/01/13/richmond-water-crisis-funny-survived) _Axios Richmond, January 13, 2025_
- [Status update: Greater Richmond's water outages](https://www.vpm.org/news/2025-01-07/winter-storm-blair-richmond-henrico-hanover-chesterfield-mutual-aid-help) _VPM News, January 7, 2025_
