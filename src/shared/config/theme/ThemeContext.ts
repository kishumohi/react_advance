import { createContext } from 'react';

export const Theme = {
    PINK: 'pink-theme',
    BLUE: 'blue-theme',
};

export type ThemeType = (typeof Theme)[keyof typeof Theme];

export interface ThemeContextProps {
    theme?: ThemeType;
    setTheme?: (theme: ThemeType) => void;
}
export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({});
