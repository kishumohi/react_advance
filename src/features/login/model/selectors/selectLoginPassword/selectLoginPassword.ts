import type { StateSchema } from '@/app/store';

export const selectLoginPassword = (state: StateSchema) => {
    return state.loginForm.password ?? '';
};
