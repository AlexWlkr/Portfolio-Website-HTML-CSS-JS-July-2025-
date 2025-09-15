const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('mobile-menu');

function toggleMenu() {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));

  menu.classList.toggle('open', !isOpen);
  menuButton.classList.toggle('open', !isOpen);

  menu.hidden = isOpen;

  if (!isOpen) {
    const firstLink = menu.querySelector('a');
    firstLink && firstLink.focus();
  }
}

menuButton?.addEventListener('click', toggleMenu);

menu?.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    menu.hidden = true;
    menuButton.classList.remove('open');
    menuButton.focus();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    menu.hidden = true;
    menuButton.classList.remove('open');
    menuButton.focus();
  }
});
