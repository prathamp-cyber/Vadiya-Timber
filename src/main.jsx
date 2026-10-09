import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

function removePageLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;

  const splashShown = sessionStorage.getItem('vadiya_splash_shown');
  if (!splashShown) {
    // Splash will play on first session visit: remove loader immediately with no fade
    loader.remove();
    return;
  }

  let removed = false;
  const dismiss = () => {
    if (removed) return;
    removed = true;
    loader.style.opacity = '0';
    const onEnd = () => loader.remove();
    loader.addEventListener('transitionend', onEnd, { once: true });
    setTimeout(() => {
      if (document.body.contains(loader)) loader.remove();
    }, 400);
  };

  // Failsafe: force-remove after 4s no matter what
  setTimeout(() => {
    dismiss();
  }, Math.max(0, 4000 - performance.now()));

  const scheduleDismiss = () => {
    const elapsed = performance.now();
    const remaining = Math.max(0, 700 - elapsed);
    setTimeout(() => {
      dismiss();
    }, remaining);
  };

  if (document.readyState === 'complete') {
    scheduleDismiss();
  } else {
    window.addEventListener('load', scheduleDismiss, { once: true });
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)

removePageLoader();
