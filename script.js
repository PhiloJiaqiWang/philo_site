function startGame() {
  // reveal panels like "levels"
  document.querySelectorAll('.panel').forEach((panel, i) => {
    setTimeout(() => {
      panel.classList.remove('hidden');
      panel.scrollIntoView({ behavior: 'smooth' });
    }, i * 800); // stagger reveal
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
