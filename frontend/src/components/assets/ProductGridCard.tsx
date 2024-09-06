"use client"
import { useRouter } from 'next/navigation';
import React, { PropsWithChildren } from 'react'
type ProductGridCardProps = {
    id: number,
    index: number,
    title: string,
    price: number,
    images: string[]
} & PropsWithChildren;
export const ProductGridCard = ({ id, price, title, images, index }: ProductGridCardProps) => {
    const router = useRouter()
    const costumHeight = index === 7 || index === 6 ? "h-[736px]" : "h-80"
    const stringPrice = (price: number): string => {
        if (price > 0) {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
        }
        return "0₮"
    }
    return (
        <div onClick={() => router.push(`/product/${id}`)} key={price} className="mb-6">
            <div className='overflow-hidden rounded-2xl'>
                <div style={{
                    backgroundImage: `url(https://res.cloudinary.com/dqhguhv7o/image/upload/v1723171049/cld-sample-3.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} className={`bg-gray-20 cursor-pointer duration-300 hover:scale-110 ${costumHeight}`}></div>
            </div>
            <div>
                <div>{title}</div>
                <div>{stringPrice(price)}</div>
            </div>
        </div>
    )
}
