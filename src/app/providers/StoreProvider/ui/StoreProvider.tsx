import { createStore, type StateSchema } from '@/app/store';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateSchema;
}

const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;
    const store = createStore(initialState);
    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
