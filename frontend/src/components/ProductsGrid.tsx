import Image from "next/image"
import { Container, ProductGridCard } from "./assets"
import { Divide } from "lucide-react"

type productsData = {
    id: number,
    image: string[],
    price: number,
    title: string
}
const productsData: productsData[] = [
    {
        id: 1,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 2,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 3,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 4,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 5,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 6,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 7,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 8,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 9,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 10,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 11,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 12,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 13,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 14,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 15,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 16,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 17,
        image: ["d"],
        price: 29000,
        title: "title"
    },
    {
        id: 18,
        image: ["d"],
        price: 29000,
        title: "title"
    }
]

export const ProductsGrid = () => {
    return (
        <Container>
            <div style={{
                backgroundImage: `url(https://res.cloudinary.com/dqhguhv7o/image/upload/v1723171049/cld-sample-3.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} className="h-[446px] rounded-2xl mb-8"></div>
            <div className="grid grid-cols-4 grid-rows-6 [&>div:nth-child(7)]:h-[692px] [&>div:nth-child(8)]:h-[692px] [&>div:nth-child(7)]:col-span-2 [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(8)]:col-span-2 [&>div:nth-child(8)]:row-span-2 gap-5">
                {productsData.map((product, index) => (<ProductGridCard key={index} id={product.id} title={product.title} price={product.price} images={product.image} index={index} />))}
            </div>
        </Container>
    )
}
