import { createContext, useContext } from "react";

export const AppContext = createContext({ loading: false });

export const useAppContext = () => useContext(AppContext);
