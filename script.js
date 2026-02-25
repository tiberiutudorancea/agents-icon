const SVG = document.querySelector('svg');
const paths = SVG.querySelectorAll('path');

paths.forEach((path, index) => {
  if (index === 2) return;

  path.addEventListener('mouseenter', () => {
    paths.forEach((p, i) => {
      if (i === 2) return;
      p.style.fill = (p === path) ? '#40403E' : '#bfbfba';
    });
  });
});

SVG.addEventListener('mouseleave', () => {
  paths.forEach((path, index) => {
    if (index === 2) return;
    path.style.fill = '#40403E';
  });
});