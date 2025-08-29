/* eslint-disable react-refresh/only-export-components */
import { HomePage } from '@/pages/Home';
import { LoginPage } from '@/pages/Login';
import { routePaths, AppRoutes } from '@/shared/config';
import type { RouteProps } from 'react-router';

export const routeConfig: RouteProps[] = [
    {
        path: routePaths[AppRoutes.HOME],
        element: <HomePage />,
    },
    {
        path: routePaths[AppRoutes.LOGIN],
        element: <LoginPage />,
    },
];
