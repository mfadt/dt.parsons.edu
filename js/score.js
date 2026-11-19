/* The score is performed once per load.
   A chance cast (three coins, six lines) seeds every mark on every layer. */

(function () {
  "use strict";

  var doc = document, html = doc.documentElement;
  if (!html.classList.contains("js")) return;

  var reduce = matchMedia("(prefers-reduced-motion: reduce)");

  /* ── chance: three coins, six lines (the I Ching throw) ───────── */

  function xorshift32(a) {
    return function () {
      a ^= a << 13; a |= 0;
      a ^= a >>> 17;
      a ^= a << 5; a |= 0;
      return (a >>> 0) / 4294967296;
    };
  }

  var seed = (Date.now() ^ Math.floor(Math.random() * 0xffffffff)) | 0;
  if (seed === 0) seed = 0x5f3759df;
  var rnd = xorshift32(seed);

  var TRIGRAM = {
    "111": "Heaven", "011": "Lake", "101": "Fire", "001": "Thunder",
    "110": "Wind", "010": "Water", "100": "Mountain", "000": "Earth"
  };

  function cast() {
    var lines = [];
    for (var i = 0; i < 6; i++) {
      var value = 0;
      for (var c = 0; c < 3; c++) value += rnd() < 0.5 ? 2 : 3; /* 6,7,8,9 */
      lines.push(value); /* index 0 = bottom line */
    }
    return lines;
  }

  function trigramKey(a) {
    var bit = function (v) { return v % 2 === 1 ? "1" : "0"; };
    return bit(a[2]) + bit(a[1]) + bit(a[0]);
  }

  function drawHexagram(lines) {
    var svg = doc.getElementById("hexagram");
    if (!svg) return;
    svg.textContent = "";
    var rowH = 18, ns = "http://www.w3.org/2000/svg";
    for (var i = 0; i < 6; i++) {
      var v = lines[i];
      var yang = v === 7 || v === 9;
      var moving = v === 6 || v === 9;
      var y = 104 - i * rowH;
      var bars = yang ? [[4, 88]] : [[4, 38], [58, 34]];
      for (var b = 0; b < bars.length; b++) {
        var r = doc.createElementNS(ns, "rect");
        r.setAttribute("x", bars[b][0]);
        r.setAttribute("y", y);
        r.setAttribute("width", bars[b][1]);
        r.setAttribute("height", 6);
        if (moving) {
          r.setAttribute("class", "chg");
          r.setAttribute("fill", "currentColor");
        } else {
          r.setAttribute("fill", "none");
          r.setAttribute("stroke", "currentColor");
          r.setAttribute("stroke-width", "2");
        }
        svg.appendChild(r);
      }
    }
  }

  /* ── layers: three plotted planes, each at its own rate ───────── */

  var layers = [].slice.call(doc.querySelectorAll(".layer")).map(function (c) {
    return {
      canvas: c,
      ctx: c.getContext("2d"),
      rate: c.classList.contains("layer--far") ? 0.05
          : c.classList.contains("layer--mid") ? 0.13 : 0.24
    };
  });

  function sizeLayer(L) {
    var vh = window.innerHeight || doc.documentElement.clientHeight;
    var docH = Math.max(doc.documentElement.scrollHeight, vh);
    /* canvas spans viewport + the layer's max parallax shift,
       so no band of the sheet is ever left without score marks */
    L.canvas.style.height = Math.round(vh * 1.16 + (docH - vh) * L.rate) + "px";
    var w = L.canvas.clientWidth, h = L.canvas.clientHeight;
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    /* keep any single canvas under ~7M device pixels */
    if (w * h * dpr * dpr > 7e6) dpr = 1;
    if (!w || !h) return;
    L.canvas.width = Math.round(w * dpr);
    L.canvas.height = Math.round(h * dpr);
    L.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    L.w = w; L.h = h;
    L.f = h / vh; /* mark density scales with canvas height */
  }

  var queue = []; /* queued marks: each closes over its own layer ctx */

  function ink(L, alpha, width) {
    L.ctx.strokeStyle = "rgba(20,23,26," + alpha + ")";
    L.ctx.lineWidth = width;
    L.ctx.lineCap = "round";
  }

  function planFar(L) {
    var items = [], n = Math.round((30 + Math.floor(rnd() * 16)) * (L.f || 1));
    for (var i = 0; i < n; i++) {
      (function () {
        var vertical = rnd() < 0.32;
        var x0 = rnd() * L.w, y0 = rnd() * L.h;
        var len = (0.25 + rnd() * 0.7) * (vertical ? L.h : L.w);
        var ang = (vertical ? Math.PI / 2 : 0) + (rnd() - 0.5) * 0.09;
        var x1 = x0 + Math.cos(ang) * len, y1 = y0 + Math.sin(ang) * len;
        var a = 0.16 + rnd() * 0.16;
        items.push(function () {
          ink(L, a, 1.2);
          L.ctx.beginPath(); L.ctx.moveTo(x0, y0); L.ctx.lineTo(x1, y1); L.ctx.stroke();
        });
      })();
    }
    return items;
  }

  function planMid(L) {
    var items = [], n = Math.round((24 + Math.floor(rnd() * 12)) * (L.f || 1));
    for (var i = 0; i < n; i++) {
      (function () {
        var cx = rnd() * L.w, cy = rnd() * L.h;
        var r = 12 + rnd() * Math.min(L.w, L.h) * 0.16;
        var a = 0.2 + rnd() * 0.18;
        if (rnd() < 0.4) {
          var pts = [[cx, cy]], k = 2 + Math.floor(rnd() * 3);
          for (var j = 0; j < k; j++) {
            pts.push([pts[j][0] + (rnd() - 0.5) * r * 4, pts[j][1] + (rnd() - 0.5) * r * 4]);
          }
          items.push(function () {
            ink(L, a, 1.3);
            L.ctx.beginPath(); L.ctx.moveTo(pts[0][0], pts[0][1]);
            for (var m = 1; m < pts.length; m++) L.ctx.lineTo(pts[m][0], pts[m][1]);
            L.ctx.stroke();
          });
        } else {
          var a0 = rnd() * Math.PI * 2;
          var sweep = (rnd() < 0.55 ? Math.PI * 2 : (0.6 + rnd() * 1.9)) * (rnd() < 0.5 ? 1 : -1);
          items.push(function () {
            ink(L, a, 1.3);
            L.ctx.beginPath(); L.ctx.arc(cx, cy, r, a0, a0 + sweep, sweep < 0); L.ctx.stroke();
          });
        }
      })();
    }
    return items;
  }

  /* near: one wandering conductor's path, segment by segment */
  function planNear(L) {
    var items = [];
    var x = rnd() * L.w, y = rnd() * L.h, heading = rnd() * Math.PI * 2;
    var steps = Math.round((40 + Math.floor(rnd() * 20)) * (L.f || 1));
    for (var i = 0; i < steps; i++) {
      (function () {
        heading += (rnd() - 0.5) * 1.5;
        var d = 30 + rnd() * 130;
        var x1 = x + Math.cos(heading) * d, y1 = y + Math.sin(heading) * d;
        var bend = (rnd() - 0.5) * d * 0.8;
        var mx = (x + x1) / 2 + Math.cos(heading + Math.PI / 2) * bend;
        var my = (y + y1) / 2 + Math.sin(heading + Math.PI / 2) * bend;
        var a = 0.3 + rnd() * 0.2;
        var x0 = x, y0 = y;
        x = x1; y = y1;
        items.push(function () {
          ink(L, a, 1.4);
          L.ctx.beginPath(); L.ctx.moveTo(x0, y0); L.ctx.quadraticCurveTo(mx, my, x1, y1); L.ctx.stroke();
        });
      })();
    }
    return items;
  }

  var plans = [planFar, planMid, planNear];

  /* extra marks keep the score alive after the first pass, capped */
  function liveMark() {
    var L = layers[1 + Math.floor(rnd() * 2)];
    var a = 0.2 + rnd() * 0.24;
    if (rnd() < 0.5) {
      var cx = rnd() * L.w, cy = rnd() * L.h, r = 4 + rnd() * 26;
      queue.push(function () {
        ink(L, a, 1);
        L.ctx.beginPath(); L.ctx.arc(cx, cy, r, 0, Math.PI * 2); L.ctx.stroke();
      });
    } else {
      var x0 = rnd() * L.w - 60, y = rnd() * L.h;
      queue.push(function () {
        ink(L, a, 1);
        L.ctx.beginPath(); L.ctx.moveTo(x0, y); L.ctx.lineTo(x0 + 120 + rnd() * 120, y); L.ctx.stroke();
      });
    }
  }

  var liveLeft = 0, liveTimer = 0, raf = 0;

  function frame() {
    var budget = 14;
    while (queue.length && budget-- > 0) queue.shift()();
    if (queue.length) {
      raf = requestAnimationFrame(frame);
    } else if (liveLeft > 0) {
      liveTimer = setTimeout(function () {
        liveMark(); liveLeft--;
        raf = requestAnimationFrame(frame);
      }, 900 + rnd() * 1800);
    }
  }

  function perform() {
    clearTimeout(liveTimer);
    if (raf) cancelAnimationFrame(raf);
    html.classList.add("drawn");
    queue = [];
    layers.forEach(function (L) {
      L.ctx.clearRect(0, 0, L.w || 0, L.h || 0);
      Array.prototype.push.apply(queue, plans[layers.indexOf(L)](L));
    });
    liveLeft = 14 + Math.floor(rnd() * 10);
    raf = requestAnimationFrame(frame);
  }

  function printAll() {
    /* reduced motion: the score is printed complete, all at once */
    layers.forEach(function (L, i) {
      L.ctx.clearRect(0, 0, L.w || 0, L.h || 0);
      plans[i](L).forEach(function (item) { item(); });
    });
    html.classList.add("performed");
  }

  /* ── parallax + folio ─────────────────────────────────────────── */

  var spineFolio = doc.getElementById("spine-folio");
  var sections = [
    ["lead", "Lead"], ["faculty", "Faculty"], ["academics", "Academics"],
    ["archive", "Thesis"], ["close", "Apply"]
  ];
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var y = window.scrollY || 0;
      if (!reduce.matches) {
        layers.forEach(function (L) {
          L.canvas.style.transform = "translate3d(0," + (-y * L.rate).toFixed(2) + "px,0)";
        });
      }
      if (spineFolio) {
        var mid = y + innerHeight * 0.42, name = sections[0][1];
        sections.forEach(function (s) {
          var el = doc.getElementById(s[0]);
          if (el && el.offsetTop <= mid) name = s[1];
        });
        if (spineFolio.textContent !== name) spineFolio.textContent = name;
      }
    });
  }

  addEventListener("scroll", onScroll, { passive: true });

  /* ── axis reveal: the archive draws itself once, as ink dries ─── */

  var axis = doc.querySelector(".axis");
  if (axis) {
    axis.classList.add("ax-drawn");
    if ("IntersectionObserver" in window && !reduce.matches) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          io.disconnect();
          [].forEach.call(axis.children, function (li, i) {
            li.style.transitionDelay = (i * 45) + "ms";
          });
          html.classList.add("performed");
        });
      }, { threshold: 0.18 });
      io.observe(axis);
    } else {
      html.classList.add("performed");
    }
  }

  /* ── cast record + re-cast ────────────────────────────────────── */

  var scoreNo = String(1000 + (Math.abs(seed) % 9000));
  var seedHex = "0x" + (seed >>> 0).toString(16).toUpperCase();

  function writeCast(lines) {
    var moving = lines.filter(function (v) { return v === 6 || v === 9; }).length;
    var lower = TRIGRAM[trigramKey(lines.slice(0, 3))];
    var upper = TRIGRAM[trigramKey(lines.slice(3, 6))];
    var text = "cast: " + upper + " over " + lower + " · " +
      moving + " changing line" + (moving === 1 ? "" : "s");
    var el;
    if ((el = doc.getElementById("rec-cast"))) el.textContent = text;
    if ((el = doc.getElementById("rec-score"))) el.textContent = scoreNo;
    if ((el = doc.getElementById("spine-score"))) el.textContent = scoreNo;
    if ((el = doc.getElementById("rec-seed"))) el.textContent = seedHex;
    drawHexagram(lines);
  }

  writeCast(cast());

  var recastBtn = doc.getElementById("recast");
  if (recastBtn) {
    recastBtn.addEventListener("click", function () {
      seed = (Date.now() ^ Math.floor(Math.random() * 0xffffffff)) | 0;
      if (seed === 0) seed = 0x5f3759df;
      rnd = xorshift32(seed);
      scoreNo = String(1000 + (Math.abs(seed) % 9000));
      seedHex = "0x" + (seed >>> 0).toString(16).toUpperCase();
      writeCast(cast());
      if (reduce.matches) printAll(); else perform();
    });
  }

  /* ── size / repaint ───────────────────────────────────────────── */

  layers.forEach(sizeLayer);

  if (reduce.matches) printAll(); else perform();

  var rt = 0;
  addEventListener("resize", function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      layers.forEach(sizeLayer);
      if (reduce.matches) printAll(); else perform();
    }, 220);
  });

  onScroll();
})();
