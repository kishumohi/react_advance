import type { UserSchema } from '@/entities/user';
import type { LoginFormSchema } from '@/features';
export interface StateSchema {
    user: UserSchema;
    loginForm: LoginFormSchema;
}
