"use client"
import { api } from "@/lib/axios";
import { AxiosError } from "axios";
import { usePathname, useRouter } from "next/navigation";
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
interface categoryDataType {
    _id: string,
    name: string,
}
interface createProductType {
    name: string,
    price: number,
    salePercent: number,
    description: string,
    images: string[],
    qty: {
        free?: number;
        s?: number;
        m?: number;
        l?: number;
        xl?: number;
        "2xl"?: number;
        "3xl"?: number;
    },
    category: string,
}
interface DataContextType {
    carousel: string[];
    saveProduct: string[];
    categories: categoryDataType[];
    setSaveProduct: Dispatch<SetStateAction<string[]>>;
    setCarousel: Dispatch<SetStateAction<string[]>>;
    createProduct: (name: string, description: string, category: string, price: number, salePercent: number, images: string[], qty: object) => Promise<void>;
}
const DataContext = createContext<DataContextType>({} as DataContextType);

const carouselData = [
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812125/carousel3_soiorf.png",
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812144/carousel2_wprz02.png",
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812150/carousel1_k6q85b.png"
];
export const DataProvider = ({ children }: PropsWithChildren) => {
    const router = useRouter();
    const pathname = usePathname();

    const [carousel, setCarousel] = useState<string[]>(carouselData);
    const [saveProduct, setSaveProduct] = useState<string[]>([])
    const [categories, setCategories] = useState<categoryDataType[]>([])
    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await api.get('/category')
                setCategories(response.data.categories)
            } catch (err: unknown) {
                console.log(err);
                if (err instanceof AxiosError) {
                    toast.error(err.response?.data?.message || "Login failed.");
                } else {
                    toast.error("An unknown error occurred.");
                }
            }
        }
        getCategories()
    }, [])
    const createProduct = async (product: createProductType) => {
        try {
            const res = await api.post("/product", { product })
            toast.success("Бүтээгдэхүүн амжилттай нэмэгдлээ")
            router.refresh
        } catch (err: unknown) {
            console.log(err)
            if (err instanceof AxiosError) {
                toast.error(err.response?.data?.message || "Failed to logout")
            } else {
                toast.error("An unknown error occurred")
            }
        }
    }
    return (
        <DataContext.Provider
            value={{ saveProduct, setSaveProduct, carousel, setCarousel, categories, createProduct }}
        >
            {children}
        </DataContext.Provider>
    );
}
export const useData = () => useContext(DataContext);