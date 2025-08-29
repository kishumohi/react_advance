import { lazy } from 'react';

export const HomePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-expect-error Simulate lazy
            setTimeout(() => resolve(import('./HomePage')), 1500);
        })
);
