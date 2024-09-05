"use client"
import { useEffect, useState } from "react"
import { Container, HighLightCard } from "./assets"
type productsData = {
    id: number;
    name: string;
    title: string;
    price: number;
    images: string[];
}
const productsData: productsData[] = [
    {
        id: 9,
        name: 'Single Blazer',
        title: 'Дан хүрэм пиджак',
        price: 220000,
        images: ['https://res.cloudinary.com/dqhguhv7o/image/upload/v1725351868/7_a1blma.png']
    },
    {
        id: 10,
        name: 'Desk Lamp',
        title: 'Ширээний чийдэн',
        price: 60000,
        images: ['https://res.cloudinary.com/dqhguhv7o/image/upload/v1725351868/image_94_q2kifn.png']
    },
    {
        id: 11,
        name: 'Outer Jacket',
        title: 'Гадуур хүрэм',
        price: 280000,
        images: ['https://res.cloudinary.com/dqhguhv7o/image/upload/v1725351867/2_1_qcbeg1.png']
    },
    {
        id: 12,
        name: 'Noise Cancelling Headphones',
        title: 'Дуу намсгагчтай чихэвч',
        price: 550000,
        images: ['https://res.cloudinary.com/dqhguhv7o/image/upload/t_Headphone/v1725351868/image_29_oxxyz3.png']
    }
];

export const HighLight = () => {
    const [indicator, setIndicator] = useState<number>(3)
    const [percent, setPercent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            percent === 3 ? setIsTransitioning(false) : setIsTransitioning(true);
            setPercent((prev) => (prev + 1) % 4);
        }, 5000);
        return () => clearInterval(interval);
    });
    return (
        <Container background="bg-white">
            <h1 className="text-center font-extrabold text-textB text-3xl mt-20 mb-10">Онцлох бүтээгдэхүүн</h1>
            <div className="flex justify-between">
                {
                    productsData.map(product => (<HighLightCard key={product.id} title={product.title} price={product.price} images={product.images} />))
                }

            </div>
            <div className="mt-14 h-1 flex gap-2 justify-center">
                <div className={`w-4 rounded-lg h-full duration-700  ${percent === 0 ? 'bg-red-500 w-6' : 'bg-red-300'}`}></div>
                <div className={`w-4 rounded-lg h-full duration-700  ${percent === 1 ? 'bg-red-500 w-6' : 'bg-red-300'}`}></div>
                <div className={`w-4 rounded-lg h-full duration-700  ${percent === 2 ? 'bg-red-500 w-6' : 'bg-red-300'}`}></div>
                <div className={`w-4 rounded-lg h-full duration-700  ${percent === 3 ? 'bg-red-500 w-6' : 'bg-red-300'}`}></div>
            </div>

        </Container>
    )
}