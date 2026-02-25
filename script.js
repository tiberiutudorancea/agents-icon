const SVG = document.querySelector('svg');
const PATHS = SVG.querySelectorAll('path');

PATHS.forEach((path, index) => {
  if (index === 2) return;

  path.addEventListener('mouseenter', () => {
    PATHS.forEach((p, i) => {
      if (i === 2) return;
      p.style.fill = (p === path) ? '#40403E' : '#bfbfba';
    });
  });
});

SVG.addEventListener('mouseleave', () => {
  PATHS.forEach((path, index) => {
    if (index === 2) return;
    path.style.fill = '#40403E';
  });
});