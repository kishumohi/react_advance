import type { StateSchema } from '@/app/store';

export const selectLoginEmail = (state: StateSchema) => {
    return state.loginForm?.email ?? '';
};
