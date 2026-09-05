'use strict';

const root = document.documentElement;
root.classList.add('js');

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
if (menuToggle && navigation) {
  menuToggle.hidden = false;
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };
  menuToggle.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeMenu();
      menuToggle.focus();
    }
  });
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const link = navigation.querySelector(`a[href="#${entry.target.id}"]`);
      if (!link) return;
      if (entry.isIntersecting) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('section[id]').forEach(section => navObserver.observe(section));
}

const copyEmail = document.getElementById('copyEmail');
const copyStatus = document.getElementById('copyStatus');
if (copyEmail && copyStatus && navigator.clipboard && window.isSecureContext) {
  copyEmail.hidden = false;
  let resetStatus;
  copyEmail.addEventListener('click', async () => {
    clearTimeout(resetStatus);
    try {
      await navigator.clipboard.writeText('williamsonmanoa@gmail.com');
      copyStatus.textContent = 'Email copied';
    } catch {
      copyStatus.textContent = 'Please select and copy the email above.';
    }
    resetStatus = setTimeout(() => { copyStatus.textContent = ''; }, 5000);
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
