// provê todos os contextos para a aplicação
import ProductProvider from "./ProductContext";
import { createContext } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
    return (
        <AppContext.Provider value={{}}>
            <ProductProvider>{children}</ProductProvider>
        </AppContext.Provider>
    );
}
