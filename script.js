document.querySelectAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetID = button.getAttribute('data-target');
    const targetDIV = document.getElementById(targetID);
    targetDIV.classList.toggle('hidden');
  });
});
