import { lazy } from 'react';

export const LoginPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-expect-error Simulate lazy
            setTimeout(() => resolve(import('./LoginPage')), 1500);
        })
);
