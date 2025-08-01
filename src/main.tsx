import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerServiceWorker } from './utils/pwa.ts'

// Register service worker for PWA
registerServiceWorker();

// Redirect only if launched as PWA from desktop shortcut (standalone mode)
const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone === true;

if (isStandalone) {
  // Perform redirect here, e.g., to a specific route or URL
  window.location.href = "/redirect-after-pwa-install"; // Change this URL as needed
} else {
  createRoot(document.getElementById("root")!).render(<App />);
}
