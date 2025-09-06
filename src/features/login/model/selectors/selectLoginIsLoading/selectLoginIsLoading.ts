import type { StateSchema } from '@/app/store';

export const selectLoginIsLoading = (state: StateSchema) => {
    return state.loginForm.isLoading;
};
