(() => {
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let stored;
  try { stored = localStorage.getItem('theme'); } catch (_) {}
  let preferred = stored === 'dark' || stored === 'light' ? stored : null;
  function setTheme(theme) {
    root.dataset.theme = theme;
    const button = document.querySelector('.theme-button');
    if (button) {
      button.setAttribute('aria-pressed', String(theme === 'dark'));
      button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }
  setTheme(preferred || (system.matches ? 'dark' : 'light'));
  system.addEventListener('change', event => {
    if (!preferred) setTheme(event.matches ? 'dark' : 'light');
  });
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-button');
    if (!button) return;
    button.hidden = false;
    setTheme(root.dataset.theme);
    button.addEventListener('click', () => {
      preferred = root.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(preferred);
      try { localStorage.setItem('theme', preferred); } catch (_) {}
    });
  });
})();
