import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User, UserSchema } from '../types/UserSchema';

// Define the initial state using that type
const initialState: UserSchema = {
    userData: undefined,
};

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.userData = action.payload;
        },
        clearUserData: (state) => {
            state.userData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
