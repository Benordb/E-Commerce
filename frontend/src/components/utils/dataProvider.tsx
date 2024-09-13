"use client"
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";
interface DataContextType {
    carousel: string[];
    saveProduct: string[];
    setSaveProduct: Dispatch<SetStateAction<string[]>>;
    setCarousel: Dispatch<SetStateAction<string[]>>;
}
const DataContext = createContext<DataContextType>({} as DataContextType);

const carouselData = [
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812125/carousel3_soiorf.png",
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812144/carousel2_wprz02.png",
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812150/carousel1_k6q85b.png"
];
export const DataProvider = ({ children }: PropsWithChildren) => {
    const [carousel, setCarousel] = useState<string[]>(carouselData);
    const [saveProduct, setSaveProduct] = useState<string[]>([])
    return (
        <DataContext.Provider
            value={{ saveProduct, setSaveProduct, carousel, setCarousel }}
        >
            {children}
        </DataContext.Provider>
    );
}
export const useData = () => useContext(DataContext);