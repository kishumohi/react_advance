import type { StateSchema } from '@/app/store';

export const selectLoginError = (state: StateSchema) => {
    return state.loginForm.error ?? '';
};
