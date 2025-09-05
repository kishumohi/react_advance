import { configureStore, type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';
import { userReducer } from '@/entities/user';

export const createStore = (initialState?: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {
            user: userReducer,
        },
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        devTools: true,
    });
};

export type AppDispatch = ThunkDispatch<StateSchema, unknown, UnknownAction>;
