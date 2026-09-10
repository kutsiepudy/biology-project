const cursor = document.getElementById('aquaCursor');
const cursorAsset = document.getElementById('cursorAsset');
const toggleButtons = document.querySelectorAll('.toggle-btn');
const idle = "cursor/aquaIdle.gif";
const hover = "cursor/aquaHappy.gif";
const click = "cursor/aquaClap.gif";

let isHoveringLink = false;

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  if (!isHoveringLink && !document.querySelector(".cursor-container.is-clicking")) {
    cursorAsset.src = idle;
  }
});

document.addEventListener('mousedown', () => {
  cursor.classList.add('is-clicking');
  cursorAsset.src = click;
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('is-clicking');
  cursorAsset.src = isHoveringLink ? hover : idle;
});

const links = document.querySelectorAll('.hover-link');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    isHoveringLink = true;
    cursorAsset.src = hover;
  });

  link.addEventListener('mouseleave', () => {
    isHoveringLink = false;
    cursorAsset.src = idle;
  });
});

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const contentBox = button.nextElementSibling;
    contentBox.classList.toggle('hidden');
  });
});
