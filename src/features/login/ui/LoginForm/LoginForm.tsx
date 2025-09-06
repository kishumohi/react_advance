import { Button, Input, Tabs } from '@/shared/ui';
import styles from './LoginForm.module.scss';
import { AuthMethod, routePaths } from '@/shared/config';
import type { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { selectLoginEmail } from '../../model/selectors/selectLoginEmail/selectLoginEmail';
import { selectLoginPhone } from '../../model/selectors/selectLoginPhone/selectLoginPhone';
import { selectLoginPassword } from '../../model/selectors/selectLoginPassword/selectLoginPassword';
import { selectLoginMethod } from '../../model/selectors/selectLoginMethod/selectLoginMethod';
import { loginActions } from '../../model/slice/loginSlice';
import { login } from '../../model/service/login';
import { useNavigate } from 'react-router';

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const email = useAppSelector(selectLoginEmail);
    const phone = useAppSelector(selectLoginPhone);
    const password = useAppSelector(selectLoginPassword);
    const method = useAppSelector(selectLoginMethod);

    const handleChangeEmail = (value: string) => {
        dispatch(loginActions.setEmail(value));
    };
    const handleChangePhone = (value: string) => {
        dispatch(loginActions.setPhone(value));
    };
    const handleChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value));
    };

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = dispatch(login({ email, phone, password }));
        if (login.fulfilled.match(result)) {
            navigate(routePaths.home);
        }
    };
    const handleTabChange = () => {
        dispatch(loginActions.setMethod(method === AuthMethod.EMAIL ? AuthMethod.PHONE : AuthMethod.EMAIL));
        dispatch(loginActions.resetForm());
    };

    return (
        <form onSubmit={handleOnSubmit} className={styles.form}>
            <Tabs onChange={handleTabChange} defaultValue={method}>
                <Tabs.List>
                    <Tabs.Trigger value={AuthMethod.EMAIL}>Email</Tabs.Trigger>
                    <Tabs.Trigger value={AuthMethod.PHONE}>Phone</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value={AuthMethod.EMAIL}>
                    <label className={styles.lable}>Email</label>
                    <Input
                        value={email}
                        onChange={handleChangeEmail}
                        type='email'
                        className={styles.input}
                        placeholder='Enter your email'
                    />
                </Tabs.Content>
                <Tabs.Content value={AuthMethod.PHONE}>
                    <label className={styles.lable}>Phone</label>
                    <Input
                        value={phone}
                        onChange={handleChangePhone}
                        className={styles.input}
                        placeholder='Enter your phone'
                    />
                </Tabs.Content>
            </Tabs>
            <label className={styles.lable}>Password</label>
            <Input
                value={password}
                onChange={handleChangePassword}
                type='password'
                className={styles.input}
                placeholder='Enter your password'
            />
            <Button type='submit' className={styles.button} size='md' fullWidth>
                Login
            </Button>
        </form>
    );
};

export default LoginForm;
