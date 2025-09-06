import type { StateSchema } from '@/app/store';
import { AuthMethod } from '@/shared/config';

export const selectLoginMethod = (state: StateSchema) => {
    return state.loginForm.method ?? AuthMethod.EMAIL;
};
