
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Verifica se estamos no GitHub Pages
const isGitHubPages = window.location.hostname.includes('github.io');
const basename = isGitHubPages ? '/bikers-pathway' : '/';

createRoot(document.getElementById("root")!).render(
  <App />
);
