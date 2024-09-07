"use client"
import { createContext, PropsWithChildren, useContext, useState } from "react";
interface DataContextType {
    carousel: string[];
    setCarousel: (value: string[]) => void;
}
const defaultValue: DataContextType = {
    carousel: [],
    setCarousel: () => { },
};
const DataContext = createContext<DataContextType>(defaultValue);

const carouselData = [
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812125/carousel3_soiorf.png",
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812144/carousel2_wprz02.png",
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812150/carousel1_k6q85b.png"
];

export const DataProvider = ({ children }: PropsWithChildren) => {

    const [carousel, setCarousel] = useState<string[]>(carouselData);
    return (
        <DataContext.Provider
            value={{ carousel, setCarousel }}
        >
            {children}
        </DataContext.Provider>
    );
}
export const useData = () => useContext(DataContext);