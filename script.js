document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const box = button.nextElementSibling;
    if (box && box.classList.contains('content-box')) {
      box.classList.toggle('hidden');
    }
  });
});
