
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove Lovable badge by setting data attribute
document.documentElement.setAttribute('data-gpt-engineer-badge', 'false');

createRoot(document.getElementById("root")!).render(<App />);
