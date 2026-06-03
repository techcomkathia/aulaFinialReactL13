import { createContext } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
    const products = [
        { id: 1, name: 'Produto 1', price: 10 },
        { id: 2, name: 'Produto 2', price: 20 },
        { id: 3, name: 'Produto 3', price: 30 },
    ];

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
}