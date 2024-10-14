"use client"
import { useEffect, useState } from "react"
import { Container, ProductGridCard } from "./assets"
import { api } from "@/lib/axios"
import { AxiosError } from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface productType {
    _id: string,
    name: string,
    price: number,
    salePercent: number,
    description: string,
    images: string[],
}
export const ProductsGrid = () => {
    const [products, setProducts] = useState<productType[]>([])
    const router = useRouter()
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await api.get('/product')
                setProducts(response.data.products)
            } catch (err: unknown) {
                console.log(err);
                if (err instanceof AxiosError) {
                    toast.error(err.response?.data?.message || "Login failed.");
                } else {
                    toast.error("An unknown error occurred.");
                }
            }
        }
        getProducts()
    }, [])
    const stringPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
    }
    return (
        <Container>
            <div onClick={() => router.push(`/product/${products[3]?._id}`)} style={{
                backgroundImage: `url(https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611133/image_1174_vjw7jg.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} className="h-[446px] rounded-2xl mb-8 relative cursor-pointer">
                <div className="absolute bottom-8 left-10">
                    <p className="text-xl">{products[3]?.name}</p>
                    <p className="text-5xl font-bold">{stringPrice(products[3]?.price || 0)}</p>
                </div>
            </div>
            <div className="grid grid-cols-4 grid-rows-6 [&>div:nth-child(7)]:h-[700px] [&>div:nth-child(8)]:h-[700px] [&>div:nth-child(7)]:col-span-2 [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(8)]:col-span-2 [&>div:nth-child(8)]:row-span-2 gap-5">
                {products.map((product, index) => (<ProductGridCard key={index} id={product._id} title={product.name} price={product.price} images={product.images} discount={product.salePercent} index={index} />))}
            </div>
        </Container>
    )
}
