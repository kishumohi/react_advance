import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { LoginFormSchema } from '../types/loginFormSchema';
import { AuthMethod } from '@/shared/config';
import { login } from '../service/login';

// Define the initial state using that type
const initialState: LoginFormSchema = {
    email: '',
    phone: '',
    password: '',
    isLoading: false,
    error: undefined,
    method: AuthMethod.EMAIL,
};

export const loginSlice = createSlice({
    name: 'loginForm',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setMethod: (state, action: PayloadAction<string>) => {
            state.method = action.payload;
        },
        resetForm: (state) => {
            state.email = '';
            state.phone = '';
            state.password = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
