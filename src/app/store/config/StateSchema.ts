import type { UserSchema } from '@/entities';
import type { LoginFormSchema } from '@/features/login';
export interface StateSchema {
    user: UserSchema;
    loginForm: LoginFormSchema;
}
