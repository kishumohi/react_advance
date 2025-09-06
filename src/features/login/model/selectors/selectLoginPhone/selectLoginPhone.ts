import type { StateSchema } from '@/app/store';

export const selectLoginPhone = (state: StateSchema) => {
    return state.loginForm.phone ?? '';
};
