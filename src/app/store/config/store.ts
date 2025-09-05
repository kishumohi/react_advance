import { configureStore, type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';

export const createStore = (initialState?: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {},
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        devTools: true,
    });
};

export type AppDispatch = ThunkDispatch<StateSchema, unknown, UnknownAction>;
