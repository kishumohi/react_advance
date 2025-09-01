type ClassValue = string | Record<string, boolean> | undefined | null;

export const classNames = (...args: ClassValue[]): string => {
    return args
        .flatMap((arg) => {
            if (!arg) return [];
            if (typeof arg === 'string') return [arg]; // optionally trim/filter empty
            if (typeof arg === 'object') {
                return Object.entries(arg)
                    .filter(([_, value]) => Boolean(value))
                    .map(([key]) => key);
            }
            return [];
        })
        .join(' ');
};
