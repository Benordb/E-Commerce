"use client"
import { useEffect, useState } from "react"
import { Container, ProductGridCard } from "./assets"
import { api } from "@/lib/axios"
import { AxiosError } from "axios"
import { toast } from "sonner"

type productsData = {
    id: number,
    image: string[],
    price: number,
    title: string,
    discount?: number,
    favorite?: number[]
}
interface productType {
    _id: string,
    name: string,
    price: number,
    salePercent: number,
    description: string,
    images: string[],
}
const productsData: productsData[] = [
    {
        id: 1,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611124/image_jjtqmb.png"],
        price: 29000,
        title: "The Prompt Magazine",
        discount: 30,
        favorite: [1]
    },
    {
        id: 2,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611126/imaged_l9fnb6.png"],
        price: 29000,
        title: "Chunky Glyph Tee"
    },
    {
        id: 3,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611131/imageB_q5obn4.png"],
        price: 29000,
        title: "All Smiles Nalgene"
    },
    {
        id: 4,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611131/imageW_nqctgr.png"],
        price: 29000,
        title: "Wildflower Hoodie",
        discount: 10,
    },
    {
        id: 5,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611130/imageOrange_vq75ik.png"],
        price: 29000,
        title: "Inkblot Tee"
    },
    {
        id: 6,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611133/imageZiink_t6jpp5.png"],
        price: 29000,
        title: "Gestures Longsleeve"
    },
    {
        id: 7,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611140/imageHat_qiq2za.png"],
        price: 29000,
        title: "Chunky Glyph Cap"
    },
    {
        id: 8,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611169/imagePath_t76jzn.png"],
        price: 29000,
        title: "Local Styles Crewneck"
    },
    {
        id: 9,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611140/imageHat_qiq2za.png"],
        price: 29000,
        title: "Chunky Glyph Cap"
    },
    {
        id: 10,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611130/imageBlack_wui8ww.png"],
        price: 29000,
        title: "Doodle Hoodie"
    },
    {
        id: 11,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611126/imaged_l9fnb6.png"],
        price: 29000,
        title: "Chunky Glyph Tee"
    },
    {
        id: 12,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611131/imageB_q5obn4.png"],
        price: 29000,
        title: "All Smiles Nalgene"
    },
    {
        id: 13,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611124/image_jjtqmb.png"],
        price: 29000,
        title: "The Prompt Magazine"
    },
    {
        id: 14,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611129/imageGreen_nfxitw.png"],
        price: 29000,
        title: "Independent Corners Tee"
    },
    {
        id: 15,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611129/imageGreen_nfxitw.png"],
        price: 29000,
        title: "Independent Corners Tee"
    },
    {
        id: 16,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611124/image_jjtqmb.png"],
        price: 29000,
        title: "The Prompt Magazine"
    },
    {
        id: 17,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611126/imaged_l9fnb6.png"],
        price: 29000,
        title: "Chunky Glyph Tee"
    },
    {
        id: 18,
        image: ["https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611131/imageB_q5obn4.png"],
        price: 0,
        title: "All Smiles Nalgene"
    }
]

export const ProductsGrid = () => {
    const [products, setProducts] = useState<productType[]>([])
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
    return (
        <Container>
            <div style={{
                backgroundImage: `url(https://res.cloudinary.com/dqhguhv7o/image/upload/v1725611133/image_1174_vjw7jg.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} className="h-[446px] rounded-2xl mb-8"></div>
            <div className="grid grid-cols-4 grid-rows-6 [&>div:nth-child(7)]:h-[700px] [&>div:nth-child(8)]:h-[700px] [&>div:nth-child(7)]:col-span-2 [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(8)]:col-span-2 [&>div:nth-child(8)]:row-span-2 gap-5">
                {products.map((product, index) => (<ProductGridCard key={index} id={product._id} title={product.name} price={product.price} images={product.images} discount={product.salePercent} index={index} />))}
            </div>
        </Container>
    )
}
