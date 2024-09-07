"use client"
import { useRouter } from 'next/navigation';
import React, { PropsWithChildren } from 'react'
import { PiHeartStraight, PiHeartStraightFill } from "react-icons/pi";
type ProductGridCardProps = {
    id: number,
    index?: number,
    title: string,
    price: number,
    discount?: number,
    favorite?: number[],
    images: string[]
} & PropsWithChildren;
export const ProductGridCard = ({ id, price, title, images, index, discount, favorite }: ProductGridCardProps) => {
    const router = useRouter()
    const costumHeight = index === 7 || index === 6 ? "h-[736px]" : "h-80"
    if (discount) {

    }
    const showPrice = (price: number, discount: number | undefined) => {
        const newPrice = stringPrice(price)
        if (discount) {
            const newDiscountedPrice = stringDiscountedPrice(price, discount)
            const newDiscount = stringDiscount(discount)
            return (
                <div className='flex items-center gap-2'>
                    <p className='font-bold'>{newDiscountedPrice}</p>
                    <p className='text-xs line-through text-[#71717A]'>{newPrice}</p>
                    <p className='font-bold text-red-500'>{newDiscount}</p>
                </div>
            )
        } else {
            return (
                <p className='font-bold'>{newPrice}</p>
            )
        }
    }
    const stringPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
    }
    const stringDiscountedPrice = (price: number, discount: number): string => {
        return (price - (price * discount / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + "₮";
    }
    const stringDiscount = (discount: number) => {
        return `${discount}%`
    }
    return (
        <div onClick={() => router.push(`/product/${id}`)} key={price} className="mb-6 space-y-2">
            <div className='overflow-hidden rounded-2xl relative'>
                <div style={{
                    backgroundImage: `url(${images})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} className={`bg-gray-20 cursor-pointer duration-300 hover:scale-125 ${costumHeight}`}></div>
                {favorite?.includes(id) ? <PiHeartStraightFill className='w-6 h-6 absolute top-4 right-4 text-black' /> : <PiHeartStraight className='w-6 h-6 absolute top-4 right-4 text-black' />}
            </div>
            <div>
                <div>{title}</div>
                {showPrice(price, discount)}
            </div>
        </div>
    )
}
