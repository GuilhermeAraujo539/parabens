  if (localStorage.getItem('logado') !== 'true') {
    window.location.href = '../public/Entrar.html';
  }

window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  const mainContent = document.getElementById('main-content');
  const cards = document.querySelectorAll('.card');
  const container = document.querySelector('.container-cards');
  const dotsContainer = document.querySelector('.scroll-indicator');

  if (!container || cards.length === 0) return;

  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    cards.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
    });
  }

  const dots = document.querySelectorAll('.scroll-indicator .dot');

  function updateCenteredCard() {
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestCard = null;
    let closestDistance = Infinity;
    let closestIndex = 0;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCard = card;
        closestIndex = index;
      }

      card.classList.remove('active-center');
    });

    if (closestCard) {
      closestCard.classList.add('active-center');
    }

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[closestIndex]) {
      dots[closestIndex].classList.add('active');
    }
  }

  const handleScroll = () => requestAnimationFrame(updateCenteredCard);

  container.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', updateCenteredCard);

  setTimeout(updateCenteredCard, 100);

  setTimeout(() => {
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
      if (mainContent) mainContent.style.display = 'block';
    }, 1000);
  }, 2000);
});
