const cursor = document.getElementById('aquaCursor');
const cursorAsset = document.getElementById('cursorAsset');
const toggleButtons = document.querySelectorAll('.toggle-btn');
const playButton = document.getElementById("play");
const idle = "cursor/aquaIdle.gif";
const hover = "cursor/aquaHappy.gif";
const click = "cursor/aquaClap.gif";
const song = new Audio("WhoMightYouBe.mp3");
song.loop = true;
let songPlaying = false;
let isHoveringInteractive = false;

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
});

document.addEventListener('mousedown', () => {
  cursor.classList.add('is-clicking');
  cursorAsset.src = click;
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('is-clicking');
  cursorAsset.src = isHoveringInteractive ? hover : idle;
});

playButton.addEventListener('click', () => {
  songPlaying = !songPlaying;
  if (songPlaying) {
    song.play();
    playButton.textContent = '🔊';
  } else {
    song.pause();
    playButton.textContent = '🔇';
  }
});

function handleMouseEnter() {
  isHoveringInteractive = true;
  cursor.classList.add('is-hovering');
  if (!cursor.classList.contains('is-clicking')) {
    cursorAsset.src = hover;
  }
}

function handleMouseLeave() {
  isHoveringInteractive = false;
  cursor.classList.remove('is-hovering');
  if (!cursor.classList.contains('is-clicking')) {
    cursorAsset.src = idle;
  }
}

const interactiveElements = [...toggleButtons, playButton];
interactiveElements.forEach(element => {
  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);
});

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const contentBox = button.nextElementSibling;
    if (contentBox) {
      contentBox.classList.toggle('hidden');
    }
  });
});
