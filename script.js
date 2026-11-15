// Marker steget som er midt i skjermen som aktivt, og oppdater kartet.
(function () {
  const map = document.getElementById('map');
  const label = document.getElementById('map-label');
  const steps = document.querySelectorAll('.step');

  function activate(step) {
    steps.forEach((s) => s.classList.toggle('is-active', s === step));
    map.dataset.active = step.dataset.step;
    label.textContent = step.dataset.label;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activate(entry.target);
      });
    },
    // Smal stripe = "lesepunktet": under kartet på mobil, midt på skjermen på desktop
    { rootMargin: window.matchMedia('(min-width: 900px)').matches
        ? '-50% 0px -50% 0px'
        : '-70% 0px -30% 0px' }
  );

  steps.forEach((s) => observer.observe(s));
})();
