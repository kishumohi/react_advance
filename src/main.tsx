import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/app/style/index.scss';
import App from './app/App';
import { BrowserRouter } from 'react-router';
import { ErrorBoundary, StoreProvider, ThemeProvider } from './app/providers';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <ThemeProvider>
                    <ErrorBoundary>
                        <App />
                    </ErrorBoundary>
                </ThemeProvider>
            </BrowserRouter>
        </StoreProvider>
    </StrictMode>
);
