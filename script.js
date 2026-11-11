// Small enhancement: hash-based sections. Links remain usable without JavaScript.
const allowedViews = new Set(['home', 'jade-snow', 'sherry']);
function showSection() {
  const requested = decodeURIComponent(location.hash.slice(1));
  const current = allowedViews.has(requested) ? requested : 'home';
  for (const view of document.querySelectorAll('.view')) {
    const active = view.id === current;
    view.hidden = !active;
    view.classList.toggle('is-active', active);
  }
  document.title = (current === 'jade-snow' ? 'Jade Snow Medical Ltd.' : current === 'sherry' ? 'Sherry Chen' : 'Jade Snow Medical × Sherry Chen') + ' | Connect';
  window.scrollTo({ top: 0, behavior: 'instant' });
}
window.addEventListener('hashchange', showSection);
showSection();
