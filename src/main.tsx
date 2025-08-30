import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/app/style/index.scss';
import App from './app/App';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from './app/providers';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);
