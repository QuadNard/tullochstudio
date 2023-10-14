'use client'

import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

interface ActiveIdContextType {
    activeId: null | number;
    setActiveId: Dispatch<SetStateAction<null | number>>;
}

const ActiveIdContext = createContext<ActiveIdContextType>({
    activeId: null,
    setActiveId: () => {},
});

export const ActiveIdProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeId, setActiveId] = useState<null | number>(0); // Provide an initial value (e.g., null)

    return (
        <ActiveIdContext.Provider value={{ activeId, setActiveId }}>
            {children}
        </ActiveIdContext.Provider>
    );
};

export function useActiveId() {
    return useContext(ActiveIdContext);
}
