function initExperienceTimeline() {
  var root = document.querySelector("[data-experience-interval]");
  if (!root) {
    return;
  }

  var track = root.querySelector("[data-experience-track]");
  var cursor = root.querySelector("[data-experience-cursor]");
  var currentDateLabel = root.querySelector("[data-current-date]");
  var activeDate = root.querySelector("[data-active-date]");
  var activeList = root.querySelector("[data-active-list]");
  var template = root.querySelector("[data-active-card-template]");
  var axisYears = root.querySelector("[data-axis-years]");
  var events = Array.prototype.slice.call(root.querySelectorAll("[data-experience-event]"));

  if (!track || !cursor || !activeList || !template || !events.length) {
    return;
  }

  var today = new Date();
  var ONGOING_END = monthIndex(today.getFullYear(), today.getMonth() + 1);
  var MIN_DURATION = 2;

  function monthIndex(year, month) {
    return year * 12 + month - 1;
  }

  function parseMonth(value) {
    var match = String(value || "").match(/(\d{4})[\.\-\/](\d{1,2})/);
    if (!match) {
      return null;
    }
    return monthIndex(parseInt(match[1], 10), parseInt(match[2], 10));
  }

  function parsePeriod(period, fallbackStart) {
    var matches = String(period || "").match(/\d{4}[\.\-\/]\d{1,2}/g) || [];
    var start = matches[0] ? parseMonth(matches[0]) : parseMonth(fallbackStart);
    var end = matches[1] ? parseMonth(matches[1]) : start;
    var ongoingPattern = /至今|present|presente|aujourd|heute|حتى الآن|nunc/i;

    if (ongoingPattern.test(period || "")) {
      end = ONGOING_END;
    }

    if (start === null) {
      start = end || ONGOING_END;
    }
    if (end === null || end < start) {
      end = start;
    }

    return {
      start: start,
      end: Math.max(end, start + MIN_DURATION),
      ongoing: ongoingPattern.test(period || "")
    };
  }

  function formatMonth(index) {
    var year = Math.floor(index / 12);
    var month = index % 12 + 1;
    return year + "." + String(month).padStart(2, "0");
  }

  function layoutLanes(items) {
    var laneEnds = [];
    items
      .slice()
      .sort(function (a, b) {
        return b.start - a.start || b.end - a.end;
      })
      .forEach(function (item) {
        var lane = 0;
        while (laneEnds[lane] !== undefined && item.end >= laneEnds[lane] - 1) {
          lane += 1;
        }
        item.lane = lane;
        laneEnds[lane] = item.start;
      });
    return Math.max(1, laneEnds.length);
  }

  var items = events.map(function (node) {
    var parsed = parsePeriod(node.dataset.period, node.dataset.start);
    return {
      node: node,
      title: node.dataset.title || "",
      period: node.dataset.period || "",
      summary: node.dataset.summary || "",
      url: node.dataset.url || node.getAttribute("href") || "#",
      start: parsed.start,
      end: parsed.end,
      ongoing: parsed.ongoing,
      lane: 0
    };
  });

  var min = Math.min.apply(null, items.map(function (item) { return item.start; }));
  var max = Math.max.apply(null, items.map(function (item) { return item.end; }));
  var span = Math.max(1, max - min);
  var lanes = layoutLanes(items);
  var latest = max;
  var earliest = min;

  function positionFor(month) {
    return ((latest - month) / span) * 100;
  }

  items.forEach(function (item) {
    var top = positionFor(item.end);
    var bottom = positionFor(item.start);
    item.node.style.setProperty("--start", top.toFixed(3) + "%");
    item.node.style.setProperty("--duration", Math.max(1.6, bottom - top).toFixed(3) + "%");
    item.node.style.setProperty("--lane", item.lane);
    item.node.classList.toggle("is-ongoing", item.ongoing);
  });

  track.style.setProperty("--lanes", lanes);
  if (axisYears) {
    var latestYear = Math.floor(latest / 12);
    var earliestYear = Math.floor(earliest / 12);
    axisYears.innerHTML = "";
    for (var year = latestYear; year >= earliestYear; year -= 1) {
      var node = document.createElement("span");
      node.className = "experience-interval__year";
      node.textContent = year;
      node.style.top = positionFor(monthIndex(year, 7)).toFixed(3) + "%";
      axisYears.appendChild(node);
    }
  }

  function renderActive(currentMonth) {
    var active = items.filter(function (item) {
      return item.start <= currentMonth && currentMonth <= item.end;
    });

    items.forEach(function (item) {
      item.node.classList.toggle("is-active", active.indexOf(item) !== -1);
    });

    activeList.innerHTML = "";
    if (!active.length) {
      var empty = document.createElement("p");
      empty.className = "experience-interval__empty";
      empty.textContent = activeList.dataset.empty || "No active experience in this window.";
      activeList.appendChild(empty);
      return;
    }

    active
      .sort(function (a, b) {
        return b.end - a.end || b.start - a.start;
      })
      .forEach(function (item) {
        var card = template.content.firstElementChild.cloneNode(true);
        var period = card.querySelector(".experience-interval__active-card-period");
        var title = card.querySelector("h2 a");
        var summary = card.querySelector("p");
        var more = card.querySelector(".experience-interval__active-card-more");

        period.textContent = item.period;
        title.textContent = item.title;
        title.href = item.url;
        summary.textContent = item.summary;
        more.href = item.url;
        card.classList.toggle("is-ongoing", item.ongoing);
        activeList.appendChild(card);
      });
  }

  var currentSystemMonth = monthIndex(today.getFullYear(), today.getMonth() + 1);
  var currentProgress = (latest - currentSystemMonth) / span;
  currentProgress = Math.max(0, Math.min(1, currentProgress));

  function update() {
    var currentMonth = currentSystemMonth;
    var label = formatMonth(currentSystemMonth);

    cursor.style.setProperty("--cursor", (currentProgress * 100).toFixed(3) + "%");
    if (currentDateLabel) currentDateLabel.textContent = label;
    if (activeDate) activeDate.textContent = label;
    renderActive(currentMonth);
  }

  var ticking = false;
  function requestUpdate() {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(function () {
      update();
      ticking = false;
    });
  }

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initExperienceTimeline);
} else {
  initExperienceTimeline();
}
