---
layout: project
title: Mapping the Jan 2025 Water Crisis
sign: /img/projects/water-crisis/sign.svg
blurb: We are creating maps of where and when the water crisis affected Richmonders.
buttons:
  - link: https://arcg.is/1if9OT1
    label: Take the Survey!
  - link: https://github.com/MapRVA/2025-water-crisis
    label: Get the Data
custom-javascript-list:
    - "./assets/js/water-crisis-meta.js"
---

<b id="meta">1.3k responses so far</b>
<script>
const resp = await fetch("https://maprva.github.io/2025-water-crisis/meta.json");
const { count, latest } = await resp.json();
const latestDate = new Date(latest);
document.getElementById("meta").textContent = `${count} responses as of ${latestDate}`;
</script>

The survey is still open [at this link](https://arcg.is/1if9O).

### Maximum Severity

This is a map of early survey results, where each cell is colored by the worst report in the cell. For example, if a cell contains a report of no water and a report of decreased pressure, it is colored as having no water (in red).

<iframe
  title="OpenTrailStash"
  width="10000"
  height="500"
  src="https://overpass-ultra.us/#map&query=url:https://maprva.github.io/2025-water-crisis/max_severity.ultra">
</iframe>

[View full map](https://overpass-ultra.us/#map&query=url:https://maprva.github.io/2025-water-crisis/max_severity.ultra)

{::nomarkdown}
{% include page_people_list.html %}
{:/nomarkdown}
