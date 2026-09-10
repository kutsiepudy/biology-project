const cursor = document.getElementById('aquaCursor');

const idle = "cursor/aquaIdle.gif";
const hover = "cursor/aquaCurious.png";
const click = "cursor/aquaWave.gif";

let isHovering = false;

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

document.addEventListener('mousedown', () => {
  cursor.classList.add('is-clicking');
  cursorAsset.src = click;
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('is-clicking');
  cursorAsset.src = hover;
});

const links = document.querySelectorAll('.hoverable-link');

const links = document.querySelectorAll('.hover-link');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    isHoveringLink = true;
    cursorAsset.src = HOVER_IMG;
  });
  
  link.addEventListener('mouseleave', () => {
    isHoveringLink = false;
    cursorAsset.src = DEFAULT_IMG;
  });
});
