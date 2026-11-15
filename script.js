// Scrollytelling: aktivt steg, globus som roterer, ruter som tegnes i takt med scroll.
(function () {
  const STEPS = window.MIGRATION_STEPS;
  const mapEl = document.getElementById('map');
  const label = document.getElementById('map-label');
  const svg = document.getElementById('globe');
  const steps = Array.from(document.querySelectorAll('.step'));
  const desktop = window.matchMedia('(min-width: 900px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const NS = 'http://www.w3.org/2000/svg';

  let activeStep = null;
  let land = null;
  let width = 0, height = 0, baseScale = 1;
  let baseKey = ''; // når kamera/størrelse/land endres, tegnes bakgrunnen på nytt
  // Nåværende kamera (interpoleres mellom steg)
  const view = { lon: STEPS[1].center[0], lat: STEPS[1].center[1], zoom: STEPS[1].zoom };

  const projection = d3.geoOrthographic().clipAngle(90).precision(0.5);
  const path = d3.geoPath(projection);
  const graticule = d3.geoGraticule10();

  // SVG-lag
  const gSphere = el('path', { class: 'sphere' });
  const gGrat = el('path', { class: 'graticule' });
  const gLand = el('path', { class: 'land' });
  const gRoutes = el('g', { class: 'routes' });
  const gPoints = el('g', { class: 'points' });
  svg.append(gSphere, gGrat, gLand, gRoutes, gPoints);

  function el(name, attrs) {
    const node = document.createElementNS(NS, name);
    for (const k in attrs) node.setAttribute(k, attrs[k]);
    return node;
  }

  // Lag DOM-noder for alle ruter og punkter én gang
  const routeNodes = [];
  const pointNodes = [];
  Object.entries(STEPS).forEach(([step, data]) => {
    data.routes.forEach((r) => {
      const node = el('path', { class: 'route' + (r.kind ? ' route--' + r.kind : '') });
      gRoutes.append(node);
      routeNodes.push({ step: +step, route: r, node,
        geo: { type: 'LineString', coordinates: r.coords } });
    });
    data.points.forEach((p) => {
      const g = el('g', { class: 'point' });
      const c = el('circle', { r: 4 });
      const t = el('text', { x: 7, y: 4 });
      t.textContent = p.name;
      g.append(c, t);
      gPoints.append(g);
      pointNodes.push({ step: +step, point: p, node: g });
    });
  });

  function resize() {
    const r = mapEl.getBoundingClientRect();
    width = r.width;
    height = r.height;
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    baseScale = Math.min(width, height) / 2 - 8;
    render();
  }

  function progressOf(section) {
    const line = window.innerHeight * (desktop.matches ? 0.5 : 0.7);
    const r = section.getBoundingClientRect();
    return Math.max(0, Math.min(1, (line - r.top) / r.height));
  }

  function render() {
    if (!width) return;
    projection
      .translate([width / 2, height / 2])
      .scale(baseScale * view.zoom)
      .rotate([-view.lon, -view.lat]);

    // Land er tungt å tegne – bare når kameraet faktisk har flyttet seg
    const key = [width, height, view.lon, view.lat, view.zoom, land && land.res].join();
    if (key !== baseKey) {
      baseKey = key;
      gSphere.setAttribute('d', path({ type: 'Sphere' }));
      gGrat.setAttribute('d', path(graticule));
      if (land) gLand.setAttribute('d', path(land));
    }

    const center = [view.lon, view.lat];
    const current = activeStep ? +activeStep.dataset.step : 0;
    const progress = activeStep ? (reducedMotion ? 1 : progressOf(activeStep)) : 0;

    routeNodes.forEach(({ step, route, node, geo }) => {
      const d = path(geo);
      node.setAttribute('d', d || '');
      if (!d || step > current) { node.style.opacity = 0; return; }
      // Tidligere steg vises dempet og ferdig tegnet
      let t = 1;
      if (step === current) {
        const [a, b] = route.draw;
        t = Math.max(0, Math.min(1, (progress - a) / (b - a)));
      }
      const len = node.getTotalLength();
      node.style.strokeDasharray = `${len} ${len}`;
      node.style.strokeDashoffset = len * (1 - t);
      node.style.opacity = step === current ? (t > 0 ? 1 : 0) : 0.25;
    });

    pointNodes.forEach(({ step, point, node }) => {
      const visible = step === current && progress >= point.show &&
        d3.geoDistance(point.at, center) < Math.PI / 2 - 0.05;
      if (visible) {
        const [x, y] = projection(point.at);
        node.setAttribute('transform', `translate(${x},${y})`);
        // Etiketter nær høyre kant flyttes til venstre side av punktet
        node.classList.toggle('point--left', x > width * 0.6);
      }
      node.style.opacity = visible ? 1 : 0;
    });
  }

  // Animer kameraet til et nytt steg
  let anim = null;
  function flyTo(target) {
    if (anim) cancelAnimationFrame(anim);
    const from = { ...view };
    // Korteste vei rundt lengdegradene
    let dLon = ((target.center[0] - from.lon + 540) % 360) - 180;
    const to = { lon: from.lon + dLon, lat: target.center[1], zoom: target.zoom };
    if (reducedMotion) { Object.assign(view, to); render(); return; }
    const start = performance.now(), dur = 1200;
    const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    (function frame(now) {
      const t = ease(Math.min(1, (now - start) / dur));
      view.lon = from.lon + (to.lon - from.lon) * t;
      view.lat = from.lat + (to.lat - from.lat) * t;
      view.zoom = from.zoom + (to.zoom - from.zoom) * t;
      render();
      if (t < 1) anim = requestAnimationFrame(frame);
    })(start);
  }

  function activate(step) {
    if (step === activeStep) return;
    activeStep = step;
    steps.forEach((s) => s.classList.toggle('is-active', s === step));
    mapEl.dataset.active = step.dataset.step;
    label.textContent = step.dataset.label;
    flyTo(STEPS[step.dataset.step]);
  }

  // Smal stripe = "lesepunktet": under kartet på mobil, midt på skjermen på desktop
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && activate(e.target)),
    { rootMargin: desktop.matches ? '-50% 0px -50% 0px' : '-70% 0px -30% 0px' }
  );
  steps.forEach((s) => observer.observe(s));

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; render(); });
  }, { passive: true });
  window.addEventListener('resize', resize);

  // Grovt kart først for rask visning, deretter detaljert (bedre kystlinje ved zoom)
  function loadLand(file, res) {
    return fetch(file)
      .then((r) => r.json())
      .then((topo) => {
        if (land && land.res > res) return;
        land = topojson.feature(topo, topo.objects.land);
        land.res = res;
        render();
      });
  }
  loadLand('data/land-110m.json', 1).then(() => loadLand('data/land-50m.json', 2));

  resize();
})();
